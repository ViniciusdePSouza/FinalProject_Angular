import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginUser } from 'src/assets/interfaces/user-interface';

import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<LoginUser> {

  constructor(private http: HttpClient) {
    super('http://localhost:3333', 'sessions', http)
   }
}
