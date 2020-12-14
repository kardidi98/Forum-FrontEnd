import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/modeles/Post';
import { baseUrl } from 'src/Urls/backUrl';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post : Post;
  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  add(user:Post){
    return this.httpClient.post(baseUrl+"posts", user,this.httpOptions);
  }

  getByTheme(id:any){
    return this.httpClient.get(baseUrl+"posts/themes/"+id,this.httpOptions);
  }



}
