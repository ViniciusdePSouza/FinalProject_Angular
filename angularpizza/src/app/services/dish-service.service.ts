import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service.service'

import { Dish } from '../../assets/interfaces/dishInterface'

@Injectable({
  providedIn: 'root'
})
export class DishServiceService extends BaseService<Dish> {

  constructor(private http: HttpClient) {
    super('http://localhost:3333', 'getters/main', http)
   }
}
