import { AuthService } from './../../security/auth/auth.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppComponent } from 'src/app/app.component';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-topbar',
    templateUrl: './app-topbar.component.html',
    styleUrls: ['./app-topbar.component.css'],
    providers: [AuthService]
})
export class AppTopbarComponent {

    rotasSemMenu: Array<String> = [
        '/login',
        '/pagina-nao-encontrada'
      ];

    constructor(public app: AppComponent, public dialog: MatDialog,
        private router: Router, private authService: AuthService) { }

    logout() {
        this.authService.logout();
    }

    abrirDialogLogout(): void {
        const dialogRef = this.dialog.open(LogoutDialogComponent, {
            width: '400px',
            height: '250px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === false) {
                this.logout();
            }
        });
    }

    exibirNavbar() {
        return !this.rotasSemMenu.includes(this.router.url);
      }

}
