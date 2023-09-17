import { AbstractControl } from '@angular/forms';

export function confirmPasswordValidator(controls: AbstractControl) {
  const password = controls.get('password');
  const confirmPassword = controls.get('confirmPassword');

  if (password?.pristine || confirmPassword?.pristine) {
    return null;
  } else {
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { 'misMatch': true }
      : null;
  }
}
