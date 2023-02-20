import { AbstractControlErrorCode } from '../enums/abstract-control-error-code';
import { ErrorMessage } from '../types/error-message.type';
import { ValidationMessage } from './validation-message';

export const ERROR_MESSAGES: ErrorMessage[] = [
  {
    key: AbstractControlErrorCode.Email,
    message: () => ValidationMessage.email,
  },
  {
    key: AbstractControlErrorCode.Required,
    message: () => ValidationMessage.required,
  },
  {
    key: AbstractControlErrorCode.MinLength,
    message: () => ValidationMessage.minLength,
  },
];
