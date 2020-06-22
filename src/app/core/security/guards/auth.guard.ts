import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SemTokenDialogComponent } from '../../components/sem-token-dialog/sem-token-dialog.component';
import { TokenService } from '../auth/token.service';
import { TOKEN_LOCAL } from '../../config/app.config';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public dialog: MatDialog, private tokenService: TokenService) {
  }

  canActivate(): boolean {
    const helper = new JwtHelperService();
    const token = this.tokenService.getToken();
    if (token && !helper.isTokenExpired(token)) {
      return true;
    }

    this.tokenService.setToken(undefined);
    location.pathname = '/login';
    return false;
  }
}
