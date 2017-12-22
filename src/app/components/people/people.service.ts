import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<Object> {
    const params = new HttpParams()
      .set('id', '123')
      .set('includeAddress', 'true');

    return this.http
      .get<Person>('/assets/data/people.json');
  }
  
}
