import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/modeles/Comment';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment : Comment;
  constructor(private httpClient: HttpClient) { }



  add(postId:any, comment: Comment){
    return this.httpClient.post(environment.baseUrl+"comments/"+postId+"/5fcaadc79c06e64900a239ed", comment);
  }

  getByPost(id:any){
    return this.httpClient.get(environment.baseUrl+"comments/posts/"+id);
  }

  getById(id:any){
    return this.httpClient.get(environment.baseUrl+"comments/"+id);
  }
  update(comment:any){
    return this.httpClient.put(environment.baseUrl+"comments/"+comment._id,comment);
  }
}
