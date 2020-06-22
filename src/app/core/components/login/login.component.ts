import { AuthService } from './../../security/auth/auth.service';
// import { UsuarioService } from './../../security/auth/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Message } from 'primeng/primeng';
import { Component, NgZone, OnInit } from '@angular/core';
import { NotificacaoService } from '../notificacao/notificacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AuthService
  ]
})
export class LoginComponent implements OnInit {

  // Primeng msgs properties
  msgs: Message[] = [];

  loginFormGroup: FormGroup;

  constructor(public authService: AuthService,
              private _ngZone: NgZone,
              public router: Router,
              private notificacaoService: NotificacaoService,
              private fb: FormBuilder,
              private route: ActivatedRoute
  ) {

    this.loginFormGroup = this.fb.group({
      usuarioInformado: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      senhaInformada: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
    });
  }

  ngOnInit() {
    // se já estiver logado, vai para a página de home
    const token = localStorage.getItem('token');
    const jwtHelper = new JwtHelperService();

    if (token != null && !jwtHelper.isTokenExpired(token)) {
      this._ngZone.run(() => this.router.navigate(['./']));
    }

  }

  fazerLogin(event) {
    if (event) {
      event.preventDefault();
    }

    const usuarioInformado = this.loginFormGroup.get('usuarioInformado').value.toLowerCase();
    const senhaInformada = this.loginFormGroup.get('senhaInformada').value;

    this.authService.login(usuarioInformado, senhaInformada).subscribe(
      res => {
        if (this.authService.estaLogado()) {

          const paginaEscolhida = this.route.snapshot.queryParams['returnUrl'];
          this.router.navigate([paginaEscolhida ? paginaEscolhida : '']);
        }
      },
      error => {
        this.notificacaoService.notify('error', 'Autenticação', error.message);
        this.msgs.push({ severity: 'error', summary: 'Erro', detail: 'Usuários e/ou senha incorretos!' });
      });
  }


}
