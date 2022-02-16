import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  _URL = 'https://api.github.com/users/';
  token = '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';

  constructor(public http: HttpClient) {}
  fetchRepo(value: string): Observable<any> {
    return this.http.get(this._URL + value + '/repos?' + this.token);
  }  
 
}
