import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forum } from 'src/modeles/Forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  forumsSubject = new Subject<any>();
   Forums: Array<Forum> = new Array<Forum>();

  constructor(private httpClient: HttpClient) { }


  add(forum:Forum){
    return this.httpClient.post(environment.baseUrl+"forums", forum);
  }

  getById(id:any) {
    return this.httpClient.get(environment.baseUrl + "forums/"+id)
  }

  getAll() {
    this.httpClient.get(environment.baseUrl + "forums").subscribe((forums: any) => {
       this.Forums = forums;
      this.emitForumsSubject();;
    });
  }
  emitForumsSubject() {
    this.forumsSubject.next(this.Forums.slice());
  }

  delete(id){
    return this.httpClient.delete(environment.baseUrl+"forums/"+id);
  }
}
