import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AuthService } from '../../security/auth/auth.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {

  tieredItems: MenuItem[] = [];
  menuHome: MenuItem;
  menuLancamentos: MenuItem;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.menuHome = {
      icon: 'ui-icon-home',
      routerLink: '/home'
    };

    this.menuLancamentos = {
      label: 'Lançamentos',
      icon: 'ui-icon-work',
      routerLink: '/lancamentos'
    };
  }

  ngOnInit() {
    this.montarMenu();
  }

  montarMenu() {
    this.tieredItems.push(this.menuHome);
    this.tieredItems.push(this.menuLancamentos);
  }

}
