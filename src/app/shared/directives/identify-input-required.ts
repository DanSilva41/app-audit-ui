import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({ name: 'identifyInputRequired' })
export class IdentifyInputRequired implements PipeTransform {
  transform(control: AbstractControl) {
    const nomesControl = Object.getOwnPropertyDescriptor(control, 'validator');
    if (nomesControl && typeof nomesControl.value === 'function') {
      const validator = control.validator({} as AbstractControl);
      if (validator && validator.required) {
        return '*';
      }
    }
    return null;
  }

}
