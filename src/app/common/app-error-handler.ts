import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert(`${error.originalError.message}`);
        console.error('App Error', error);
    }
}