import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private BaseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: HttpClient, @Inject(String) private _url: string) { }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error));

    if (error.status === 404)
      return throwError(new NotFoundError(error));

    return throwError(new AppError(error));
  }

  getAll() {
    return this._http.get(this.BaseUrl + this._url).pipe(
      catchError(err => this.handleError(err))
    )
  }

  post(resource) {
    return this._http.post(this.BaseUrl + this._url, resource);
  }

  delete(id) {
    return this._http.delete(this.BaseUrl + this._url + '/' + id);
  }

  put(resource, id) {
    return this._http.post(this.BaseUrl + this._url + '/' + id, resource);
  }
}
