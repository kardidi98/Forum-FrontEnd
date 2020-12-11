import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/modeles/Theme';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-form-theme',
  templateUrl: './form-theme.component.html',
  styleUrls: ['./form-theme.component.css']
})
export class FormThemeComponent implements OnInit {

  Theme :Theme = new Theme();

  constructor(private  themeService: ThemeService) {
    
   }

  ngOnInit(): void {
  }
  submitTheme(values: any){
    this.Theme = values;
    this.Theme.totalPost = 0;
    this.Theme.totalViews = 0;
    this.themeService.add(this.Theme);
  }
  
}
