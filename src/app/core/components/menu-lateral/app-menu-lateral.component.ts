import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-lateral',
    template: `
        <ul app-submenu [item]="itensMenuLateral" root="true" class="ultima-menu ultima-main-menu clearfix" [reset]="reset" visible="true"></ul>
    `
})
export class AppMenuLateralComponent implements OnInit {

    @Input() reset: boolean;

    itensMenuLateral: Array<any>;

    constructor() { }

    ngOnInit() {
        this.inicializarMenuLateral();
    }

    inicializarMenuLateral() {
        const itemPortal = { label: 'Início', icon: 'dashboard', command: (event) => { window.location.pathname = '/'; } }

        this.itensMenuLateral = new Array<any>();
        this.itensMenuLateral.push(itemPortal);
    }
}
