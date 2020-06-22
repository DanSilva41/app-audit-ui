import { EventEmitter, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  public seqUsuario: number;
  public username: string;
  public estaAutenticado = new EventEmitter<boolean>();

  private helper = new JwtHelperService();
  private tokenDecodificado: any;

  private oauthTokenUrl: string;
  private CLIENT_ID = 'angular';
  private CLIENT_SECRET = 'secret';
  private GRANT_TYPE_PASSWORD = 'password';

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.decodificarToken();
  }

  login(username: string, senha: string) {
    const headers: HttpHeaders = this.buildAuthHeader();
    const body = this.buildCodeRequestData(username, senha);

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .pipe(
      map((res: any) => {
        this.tokenService.setToken(res.access_token);
      })
    );
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['login']);
    this.estaAutenticado.emit(false);
  }

  estaLogado(): boolean {
    return this.tokenService.hasToken();
  }

  decodificarToken() {
    if (this.tokenService.hasToken()) {
      this.tokenDecodificado = this.helper.decodeToken(this.tokenService.getToken());
      this.seqUsuario = +this.tokenDecodificado.seqUsuario;
      this.username = this.tokenDecodificado.username;
    }
  }

  protected buildAuthHeader(): any {
    if (this.CLIENT_ID && this.CLIENT_SECRET) {
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET))
        .set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
        .set('Accept', 'application/json');
      return headers;
    } else {
      throw Error('Para o método de autenticação de cliente do corpo da solicitação, forneça clientId e clientSecret.');
    }
  }

  protected buildCodeRequestData(username: string, senha: string): any {
    const params = {
      grant_type: this.GRANT_TYPE_PASSWORD,
      username: username,
      password: senha,
      client_id: this.CLIENT_ID,
      client_secret: this.CLIENT_SECRET
    };
    return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
  }

  protected urlEncodeParameters(params: any): string {
    return Object.keys(params).map((k) => {
      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
    }).join('&');
  }

  protected cleanParams(params: any): any {
    Object.entries(params)
      .forEach(([key, val]) => !val && delete params[key]);
    return params;
  }

  protected addCredentialsToParams(params: any): any {
    if (this.CLIENT_ID && this.CLIENT_SECRET) {
      return {
        ...params,
        client_id: this.CLIENT_ID,
        client_secret: this.CLIENT_SECRET
      };
    } else {
      throw Error('Para o método de autenticação de cliente do corpo da solicitação, forneça clientId e clientSecret.');
    }
  }
}
