import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { cities } from './cities';

import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'ow-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  resgisterForm: FormGroup = this.fb.group({
    address: ['', [Validators.required]],
    amountToLend: ['', [Validators.required, Validators.min(0)]],
    cellphoneNumber: [
      '',
      [Validators.required, Validators.pattern('[0-9]{9}')],
    ],
    city: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    fees: ['', [Validators.required]],
    id: ['', [Validators.required, Validators.pattern('[0-9]{8,11}')]],
    lastName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    photoId: ['', [Validators.required]],
    photoPublicService: ['', [Validators.required]],
    postalCode: ['', [Validators.required, Validators.pattern('[0-9]{5,8}')]],
    workAddress: ['', [Validators.required]],
  });
  cities: string[] = cities;
  fees = Array.from({ length: 36 }, (_, i) => i + 1);
  errorState = false;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  /* metodo para mostrar mensaje de error en los input */
  invalidInput(campo: string) {
    return (
      this.resgisterForm.controls[campo].errors &&
      this.resgisterForm.controls[campo].touched
    );
  }

  submitForm() {
    if (this.resgisterForm.invalid) {
      this.resgisterForm.markAllAsTouched();
      return;
    }
    this.resgisterForm.reset();
    this.dialog.open(DialogComponent);
  }
}
