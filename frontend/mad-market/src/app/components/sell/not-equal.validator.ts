import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function notEqualValidator(notEqualValue: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isEqual = control.value === notEqualValue;
    return isEqual ? { notEqual: true } : null;
  };
}

export function notEqual(control: AbstractControl): ValidationErrors | null {
  const notEqualValue = 'select'; // Adjust the value as needed
  return notEqualValidator(notEqualValue)(control);
}
