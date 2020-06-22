import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AuthService } from '../../security/auth/auth.service';
import { Permissao } from './../../../enums/permissao.enum';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {

  tieredItems: MenuItem[] = [];
  menuHome: MenuItem;
  menuTeste: MenuItem;
  PERMISSAO = Permissao;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.menuHome = {
      icon: 'ui-icon-home',
      routerLink: '/home'
    };

    // EXEMPLO DE ITEM DO MENU COM TEXTO
    // this.menuTeste = {
    //   label: 'Questionário',
    //   icon: 'ui-icon-work',
    //   routerLink: '/questionario/201500051676/processo',
    // };
  }

  ngOnInit() {
    // UTILIZAR CASO TENHA MENU EM DOIS NÍVEIS
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && val.url === '/teste') {
        this.router.navigate(['/teste2']);
      }
    });
    this.montarMenu();
  }

  montarMenu() {
    this.tieredItems.push(this.menuHome);
    // this.tieredItems.push(this.menuTeste);
    // EXEMPLO DE MONTAGEM DE MENU PROTEGIDO POR PERMISSÃO
    // if (this.authService.possuiPermissao(this.PERMISSAO.PERMISSAO_TESTE)) {
    //   this.tieredItems.push(this.menuTeste);
    // }
  }

}
