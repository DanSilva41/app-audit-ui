import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from './../models/usuario.model';
import { AuthService } from './security/auth/auth.service';

@Injectable()
export class CoreService {
  usuario: UsuarioModel;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.usuario = new UsuarioModel();
  }

}
