import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/modeles/Theme';

@Component({
  selector: '[app-theme]',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
 


  @Input() Theme : Theme;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  choisirTheme() {
    this.router.navigate(['themes/'+this.Theme._id]);
  }



}
