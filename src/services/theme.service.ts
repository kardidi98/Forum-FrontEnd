import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/modeles/Theme';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {



  Themes: Array<Theme> = new Array<Theme>();

  themesSubject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  add(theme: Theme) {
    return this.httpClient.post(environment.baseUrl + "themes", theme);
  }

  update(theme: Theme) {
    return this.httpClient.put(environment.baseUrl + "themes/" + theme._id, theme);
  }

  get(id: any) {
    return this.httpClient.get(environment.baseUrl + "themes/" + id)
  }

  delete(theme:Theme){
    return this.httpClient.delete(environment.baseUrl+"themes/" + theme._id)
  }
  getByKeyword(keyword: any) {
    return this.httpClient.get(environment.baseUrl + "themes/titre/" + keyword)

  }
  getByTitle(titre: any) {
    return this.httpClient.get(environment.baseUrl + "themes/titre/" + titre);
  }
  getAll() {
    this.httpClient.get(environment.baseUrl + "themes").subscribe((themes: any) => {
      this.Themes = themes;
      this.emitThemesSubject();;
    });
  }

  getByForum(id:any) {
    return this.httpClient.get(environment.baseUrl + "themes/forums/"+id)
  }


  emitThemesSubject() {
    this.themesSubject.next(this.Themes.slice());
  }


}
