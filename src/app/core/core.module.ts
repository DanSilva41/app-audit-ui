import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { CoreService } from './core.service';
import { AuthService } from './security/auth/auth.service';
import { AuthGuard } from './security/guards/auth.guard';

import { NotificacaoComponent } from './components/notificacao/notificacao.component';
import { LogoutDialogComponent } from './components/logout-dialog/logout-dialog.component';
import { SemTokenDialogComponent } from './components/sem-token-dialog/sem-token-dialog.component';
import { AppBreadcrumbComponent } from './components/breadcrumb/app.breadcrumb.component';
import { NotificacaoService } from './components/notificacao/notificacao.service';
import { BreadcrumbService } from './components/breadcrumb/breadcrumb.service';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AppFooterComponent } from './components/footer/app-footer.component';
import { AppInlineProfileComponent } from './components/profile/app.profile.component';
import { AppRightpanelComponent } from './components/rightpanel/app.rightpanel.component';
import { AppTopbarComponent } from './components/topbar/app-topbar.component';

import { MessageService } from 'primeng/components/common/messageservice';
import { ButtonModule, GrowlModule, TooltipModule, MenubarModule, OverlayPanelModule } from 'primeng/primeng';
import { RequestInterceptor } from './security/auth/request.interceptor';
import { AppMenuLateralComponent } from './components/menu-lateral/app-menu-lateral.component';
import { AppSubMenuLateralComponent } from './components/menu-lateral/submenu-lateral/app-submenu-lateral.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotificacaoComponent,
    LogoutDialogComponent,
    SemTokenDialogComponent,
    AppBreadcrumbComponent,
    MenuBarComponent,
    AppFooterComponent,
    AppInlineProfileComponent,
    AppMenuLateralComponent,
    AppRightpanelComponent,
    AppSubMenuLateralComponent,
    AppTopbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MenubarModule,
    OverlayPanelModule,
    GrowlModule,
    ButtonModule,
    TooltipModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [
    NotificacaoService,
    AuthGuard, AuthService,
    MessageService,
    CoreService,
    BreadcrumbService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MenuBarComponent,
    AppFooterComponent,
    AppInlineProfileComponent,
    AppMenuLateralComponent,
    AppSubMenuLateralComponent,
    AppRightpanelComponent,
    AppTopbarComponent,
    NotificacaoComponent,
    LogoutDialogComponent,
    SemTokenDialogComponent,
    AppBreadcrumbComponent,
    LoginComponent
  ],
  entryComponents: [LogoutDialogComponent, SemTokenDialogComponent]

})
export class CoreModule {
}
