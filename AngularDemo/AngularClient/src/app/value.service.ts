import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ValueService {
  baseUrl = 'http://localhost:58763/api';

  constructor(private http: HttpClient) { }

  getValues() {
    return this.http.get<string[]>(this.baseUrl + '/values');
  }

  getValue(id: number) {
    return this.http.get<string>(this.baseUrl + '/values/' + id);
  }

  postValue(value: string) {
    const contentHeader = new HttpHeaders({ 'Content-type': 'application/json' });  

    return this.http.post(this.baseUrl + '/values', value, { headers: contentHeader });
  }
}
