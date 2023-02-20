import { AbstractControl } from '@angular/forms';

import { AbstractControlErrorCode } from '../enums/abstract-control-error-code';

export type ErrorMessage = {
  key: AbstractControlErrorCode;
  message: (ac: AbstractControl) => string;
};
