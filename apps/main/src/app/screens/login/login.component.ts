import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageService } from '@utils/services';

import { LoginService } from '../../services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  hide = true;

  constructor(
    private readonly service: LoginService,
    private readonly fb: FormBuilder,
    private readonly errorMessageService: ErrorMessageService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const { email, password } = this.form.value;
    this.login(email, password);
  }

  login(email: string, password: string) {
    this.service.login(email, password).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   * If the control exists, return the error message, otherwise return undefined.
   * @param {string} controlName - string - the name of the control in the form
   * @returns The error message for the control.
   */
  getErrorMessage(controlName: string): string | undefined {
    const control = this.form.get(controlName);
    return control
      ? this.errorMessageService.getErrorMessage(control)
      : undefined;
  }

  /**
   * If the control is dirty or touched, return true if the control has an error, otherwise return
   * false.
   * @param {string} controlName - string - the name of the control you want to check
   * @returns The return value is a boolean.
   */
  isControlHasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    if (control?.dirty || control?.touched) {
      return control ? this.errorMessageService.hasError(control) : true;
    }
    return false;
  }
}
