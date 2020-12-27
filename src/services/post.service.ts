import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/modeles/Post';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post : Post;
  userId:any = localStorage.getItem("id");
  constructor(private httpClient: HttpClient) { }


  add(user:Post){
    return this.httpClient.post(environment.baseUrl+"posts/"+this.userId, user);
  }

  getByTheme(id:any){
    return this.httpClient.get(environment.baseUrl+"posts/themes/"+id);
  }

  getById(id:any){
    return this.httpClient.get(environment.baseUrl+"posts/"+id);
  }



}
