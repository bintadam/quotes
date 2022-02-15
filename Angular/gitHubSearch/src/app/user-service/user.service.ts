import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../repositories/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Users[] = [];
  _URL = 'https://api.github.com/users/';
  token = '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';

  constructor(private http: HttpClient) {}
  findUser(value: string) {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      bio: string;
      followers: string;
      following: string;
      public_repos: string;
    }
    let balan = new Promise<void>((resolve, reject) => {
      this.user = [];
      this.http
        .get<ApiResponse>(this._URL + value + this.token)
        .toPromise()
        .then(
          (results) => {
            this.user.push(results);
            console.log(results);

            resolve();
          },
          (err) => {
            reject();
          }
        );
    });
    return balan;
  }
}

  