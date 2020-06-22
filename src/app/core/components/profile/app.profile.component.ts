import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/auth/auth.service';

@Component({
    selector: 'app-inline-profile',
    template: `
        <div class="profile" style="padding-top:3em" [ngClass]="{'profile-expanded':false}">
            <span class="profile-name font-weight-bold" style="padding-bottom:1em">{{nomeUsuario}}</span>
        </div>
    `
})
export class AppInlineProfileComponent implements OnInit {

    nomeUsuario: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        if (this.authService.estaLogado()) {
            // tslint:disable-next-line:max-line-length
            this.nomeUsuario = this.authService.username;
        }
    }
}
