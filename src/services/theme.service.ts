import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/modeles/Theme';
import { environment } from '../environments/environment';

import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ThemeService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  Themes: Array<Theme> = new Array<Theme>();

  
  constructor(private httpClient: HttpClient) {}

  add(theme: Theme){
    return this.httpClient.post(environment.baseUrl+"themes",theme, this.httpOptions); 
  }

  update(theme: Theme){
    return this.httpClient.put(environment.baseUrl+"themes/"+theme._id,theme, this.httpOptions); 
  }

  get(id: any){
    return  this.httpClient.get(environment.baseUrl+"themes/"+id, this.httpOptions);
  }
  getByKeyword(keyword: any){
    return this.httpClient.get(environment.baseUrl+"themes/titre/"+keyword,this.httpOptions)
    
  }
  getByTitle(titre: any){
    return  this.httpClient.get(environment.baseUrl+"themes/titre/"+titre, this.httpOptions);
  }
  getAll(){
    return  this.httpClient.get(environment.baseUrl+"themes", this.httpOptions);
    
  } 


}
