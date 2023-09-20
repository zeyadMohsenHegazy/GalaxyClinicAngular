// import { AbstractControl } from '@angular/forms';

// export function confirmPasswordValidator(controls: AbstractControl) {
//   const userPassword = controls.get('userPassword');
//   const confirmPassword = controls.get('confirmPassword');

//   if (userPassword?.pristine || confirmPassword?.pristine) {
//     return null;
//   } else {
//     return userPassword &&
//       confirmPassword &&
//       userPassword.value !== confirmPassword.value
//       ? { 'misMatch': true }
//       : null;
//   }
// }
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.userPassword === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
};