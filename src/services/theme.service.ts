import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/modeles/Theme';
import { baseUrl } from 'src/Urls/backUrl';

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
    return this.httpClient.post(baseUrl+"themes",theme, this.httpOptions); 
  }

  update(theme: Theme){
    return this.httpClient.put(baseUrl+"themes/"+theme._id,theme, this.httpOptions); 
  }

  get(id: any){
    return  this.httpClient.get(baseUrl+"themes/"+id, this.httpOptions);
  }
  getByKeyword(keyword: any){
    return this.httpClient.get(baseUrl+"themes/titre/"+keyword,this.httpOptions)
    
  }
  getByTitle(titre: any){
    return  this.httpClient.get(baseUrl+"themes/titre/"+titre, this.httpOptions);
  }
  getAll(){
    return  this.httpClient.get(baseUrl+"themes", this.httpOptions);
    
  } 


}
