import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpsertType } from '@utils';
import { ErrorMessageService } from '@utils/services';
import { User } from '../../../interfaces/user.interface';

interface DialogData {
  user?: User;
  upsertType: UpsertType;
}

@Component({
  selector: 'frontend-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss'],
})
export class UserUpsertComponent implements OnInit {
  public readonly upsertType: UpsertType;
  public form!: FormGroup;
  public title = 'Registrar usuario';

  private readonly user?: User;

  get editMode(): boolean {
    return this.upsertType === UpsertType.Edit;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,
    private readonly fb: FormBuilder,
    private readonly errorMessageService: ErrorMessageService,
    private readonly dialogRef: MatDialogRef<UserUpsertComponent>
  ) {
    this.upsertType = data.upsertType;
    this.editMode && (this.title = 'Editar usuario');
    this.editMode && (this.user = data.user);
  }

  ngOnInit(): void {
    this.initializeForm();
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

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const user = this.form.value;
    this.editMode && (user.dni = this.user?.dni);
    this.dialogRef.close({ update: true, user });
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      dni: [
        { value: this.data.user?.dni, disabled: this.editMode },
        Validators.required,
      ],
      name: [this.data.user?.name, Validators.required],
      username: [this.data.user?.username, Validators.required],
      email: [this.data.user?.email, Validators.required],
      password: ['123456'],
      role: [this.data.user?.role, Validators.required],
      address: [this.data.user?.address, Validators.required],
      phone: [this.data.user?.phone, Validators.required],
    });
  }
}
