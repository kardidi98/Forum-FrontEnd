import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from 'src/modeles/Theme';

@Component({
  selector: '[app-theme]',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  // @Input() indexOfTheme :number;
  // @Input() id :number;
  // @Input() titre : string;
  // @Input() description : string;
  // @Input() moderateur : string;
  // @Input() totalPost : number;
  // @Input() totalViews : number;

  @Output() themeSelected = new EventEmitter<any>();

  @Input() Theme : Theme;

  constructor() { }

  ngOnInit(): void {
  }

  // choisirTheme() {
  //   this.themeSelected.emit(this.id);
  // }

  choisirTheme() {
    this.themeSelected.emit(this.Theme.id);
  }



}
