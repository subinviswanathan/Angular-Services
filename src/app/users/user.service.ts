import { Injectable } from '@angular/core';
import { BaseService } from '../services/base-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(_http: HttpClient) {
    super(_http, '/users');
  }
}
