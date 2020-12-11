import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/modeles/Theme';
import { baseUrl } from 'src/Urls/backUrl';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  Themes: Array<Theme> = new Array<Theme>();

  
  constructor(private httpClient: HttpClient) {
    
   }

  add(theme: Theme): void{
    this.Themes.push(theme)
  }
  get(id: number){
    return  this.httpClient.get(baseUrl+"themes/"+id, httpOptions);
  }
  getByKeyword(keyword: any): Array<Theme>{
    return this.Themes.filter((item)=>{
      return (item.titre===keyword) || (item.description===keyword) || (item.moderateur===keyword) 
    })
  }
  getAll(){
    return  this.httpClient.get(baseUrl+"themes", httpOptions);
    
  } 


}
