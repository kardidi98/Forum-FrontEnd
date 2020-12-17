import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/modeles/User';
import { baseUrl } from 'src/Urls/backUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  user : User;
  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  add(user:User){
    return this.httpClient.post(baseUrl+"users", user,this.httpOptions);
  }

  getByEmail(email:string){
    return this.httpClient.get(baseUrl+"users/email/"+email,this.httpOptions);
  }

  getAll(){
    return this.httpClient.get(baseUrl+"users",this.httpOptions);
  }

  getById(id:any){
    return this.httpClient.get(baseUrl+"users/"+id,this.httpOptions);
  }

  

}
