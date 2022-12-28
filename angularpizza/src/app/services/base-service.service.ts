import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class BaseService<T> {
    _httpClient!: HttpClient
    headers!: HttpHeaders

    constructor (private baseUrl: string, private resource: string, private httpClient: HttpClient) {
        this._httpClient = httpClient
        this.headers = new HttpHeaders({
            'content-type': 'application/json'
        })
    }

    create(obj: T) {
        console.log(JSON.stringify(obj))
        return this._httpClient.post<T>(
            `${this.baseUrl}/${this.resource}`, JSON.stringify(obj), {headers: this.headers}
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