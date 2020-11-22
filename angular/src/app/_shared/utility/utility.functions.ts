import { FormControl, FormGroup } from '@angular/forms';

export  function isValidInput(fieldName,form: FormGroup): boolean {
    return form.controls[fieldName].invalid &&
        (form.controls[fieldName].dirty || form.controls[fieldName].touched);
}
