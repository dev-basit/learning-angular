import { AbstractControl, ValidationErrors } from '@angular/forms';
// import { resolve } from 'url';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'mosh')
          resolve({
            shouldBeUnique: true,
          });
        else if (control.value == 'user')
          reject({
            value: control.value,
            message: 'Could not Retrieve Value...',
          });
        else resolve(null);
      }, 2000);
    });
  }
}
