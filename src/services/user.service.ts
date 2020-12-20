import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/modeles/User';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  user : User;
  constructor(private httpClient: HttpClient) { }


  add(user:User){
    return this.httpClient.post(environment.baseUrl+"users/register", user);
  }
  login(user:any){
    return this.httpClient.post(environment.baseUrl+"users/login", user);
  }

  getByEmail(email:string){
    return this.httpClient.get(environment.baseUrl+"users/email/"+email);
  }

  getAll(){
    return this.httpClient.get(environment.baseUrl+"users");
  }

  getById(id:any){
    return this.httpClient.get(environment.baseUrl+"users/"+id);
  }

  logout(){
    localStorage.clear();
    
  }
  

}
