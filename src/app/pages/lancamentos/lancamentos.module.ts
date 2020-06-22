import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { AlbunsComponent } from './albuns/albuns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ColetaneaService } from '../../shared/service/coletanea/coletanea.service';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [AlbunsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ListboxModule,
    SharedModule,
    LancamentosRoutingModule
  ],
  providers: [ColetaneaService]
})
export class LancamentosModule { }
