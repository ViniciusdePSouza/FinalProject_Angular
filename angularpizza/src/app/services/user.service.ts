import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service.service'

import { NewUser } from '../../assets/interfaces/user-interface'

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<NewUser> {

  constructor(private http: HttpClient) {
    super('http://localhost:3333', 'users', http)
   }
}