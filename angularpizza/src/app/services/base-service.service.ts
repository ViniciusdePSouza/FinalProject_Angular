import { HttpClient } from '@angular/common/http';

export abstract class BaseService<T> {
    _httpClient!: HttpClient

    constructor (private baseUrl: string, private resource: string, private httpClient: HttpClient) {
        this._httpClient = httpClient
    }

    create(obj: T) {
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
        return this._httpClient.get<T[]>(
            `${this.baseUrl}/${this.resource}`, {params}
        )
    }
}