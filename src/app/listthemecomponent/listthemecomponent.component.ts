import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/modeles/Theme';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-listthemecomponent',
  templateUrl: './listthemecomponent.component.html',
  styleUrls: ['./listthemecomponent.component.css']
})
export class ListthemecomponentComponent implements OnInit {
  Themes: any = [];
  keyword = "";
  constructor(private  themeService: ThemeService) { }

  ngOnInit(): void {

    this.themeService.getAll().subscribe((data: {}) => {
      this.Themes = data;
    });
    
  }
  chercherParMotCle(motCle:any){
    this.keyword = "";
  }

 

}
