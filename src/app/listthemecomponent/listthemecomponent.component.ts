import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Theme } from 'src/modeles/Theme';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-listthemecomponent',
  templateUrl: './listthemecomponent.component.html',
  styleUrls: ['./listthemecomponent.component.css']
})
export class ListthemecomponentComponent implements OnInit, OnDestroy {
  Themes: any = [];
  keyword = "";
  themeSubscription : Subscription;
  
  constructor(private router : Router,private  themeService: ThemeService) { }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.themeService.getAll();
    this.themeSubscription = this.themeService.themesSubject.subscribe((res:any)=>{
      this.Themes = res;
    })
    this.themeService.emitThemesSubject();
    
  }
  chercherParMotCle(motCle:any){
    this.keyword = "";
  }
  goHome(){
    this.router.navigate(["/accueil"]);
  }

 

}
