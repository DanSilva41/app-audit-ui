import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColetaneaService } from './service/coletanea/coletanea.service';
import { IdentifyInputRequired } from './directives/identify-input-required';

@NgModule({
  declarations: [IdentifyInputRequired],
  imports: [
    CommonModule,
  ],
  exports: [IdentifyInputRequired],
  providers: [ColetaneaService]
})
export class SharedModule { }
