import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/modeles/Post';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post : Post;
  constructor(private httpClient: HttpClient) { }


  add(user:Post){
    return this.httpClient.post(environment.baseUrl+"posts/5fcaadc79c06e64900a239ed", user);
  }

  getByTheme(id:any){
    return this.httpClient.get(environment.baseUrl+"posts/themes/"+id);
  }

  getById(id:any){
    return this.httpClient.get(environment.baseUrl+"posts/"+id);
  }



}
