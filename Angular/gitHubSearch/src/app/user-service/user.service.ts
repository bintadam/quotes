import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Users[]=[];
  _URL ='https://api.github.com/users/';
  token = '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';

  constructor(private http:HttpClient) { }
  findUser(value: string){
    interface ApiRespond{
      avatar_url: string;
      bio: string;
      name : string;
      followers : string;
      following : string;
      public_repos : String ;
    }
  }
}
