import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
