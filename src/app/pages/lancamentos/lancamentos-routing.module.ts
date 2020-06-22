import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbunsComponent } from './albuns/albuns.component';
import { AuthGuard } from '../../core/security/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AlbunsComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule {
}
