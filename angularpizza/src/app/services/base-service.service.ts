import { HttpClient } from '@angular/common/http';

import { Dish } from '../../assets/interfaces/dishInterface'

export abstract class BaseService<Dish> {
    _httpClient!: HttpClient

    constructor (private baseUrl: string, private resource: string, private httpClient: HttpClient) {
        this._httpClient = httpClient
    }

    create(obj: Dish) {
        return this._httpClient.post(
            `${this.baseUrl}/${this.resource}`, JSON.stringify(obj)
        )
    }

    delete(id: number ){
        return this._httpClient.delete(
            `${this.baseUrl}/${this.resource}/${id}`,
        )
    }

    get(params?: any) {
        return this._httpClient.get<Dish[]>(
            `${this.baseUrl}/${this.resource}`, {params}
        )
    }
}