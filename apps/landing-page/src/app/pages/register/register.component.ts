import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { cities } from './cities';

@Component({
  selector: 'ow-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @ViewChild('login') private _loginNgForm!: NgForm;
  cities: string[] = cities;
  fees = Array.from({ length: 36 }, (_, i) => i + 1);
  registerForm: FormGroup = this.fb.group({
    address: ['', [Validators.required]],
    amountToLend: [
      '',
      [Validators.required, Validators.min(0), Validators.pattern(/\d/)],
    ],
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
    workAddress: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  /* metodo para mostrar mensaje de error en los input */
  invalidInput(campo: string) {
    return (
      this.registerForm.controls[campo].errors &&
      this.registerForm.controls[campo].touched
    );
  }

  submitForm() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.registerForm.reset();
    this._loginNgForm.resetForm();
    Swal.fire({
      title: 'Enviado con éxito!',
      text: 'Gracias por escogernos para cumplir tus metas, pronto nos pondremos en contacto contigo.',
      icon: 'success',
      confirmButtonText: 'Cerrar',
    }).then(() => {
      this.router.navigate(['/']);
    });
  }
}
