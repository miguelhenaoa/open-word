import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ERROR_MESSAGES } from './constants/error-messages';
import { ErrorMessage } from './types/error-message.type';

@Injectable()
export class ErrorMessageService {
  private readonly errorMessages: ErrorMessage[] = ERROR_MESSAGES;

  /**
   * If the AbstractControl has an error, find the error message that matches the error key and return
   * the message
   * @param {AbstractControl} ac - AbstractControl - the form control that has the error
   * @returns The error message.
   */
  public getErrorMessage(ac: AbstractControl): string | undefined {
    const error = this.errorMessages.find((item) => ac.hasError(item.key));
    return error?.message(ac);
  }

  /**
   * If the AbstractControl has any of the errors in the errorMessages array, return true.
   * @param {AbstractControl} ac - AbstractControl - the form control that you want to check for errors
   * @returns The errorMessages array is being filtered by the hasError method.
   */
  public hasError(ac: AbstractControl): boolean {
    return this.errorMessages.some((item) => ac.hasError(item.key));
  }
}
