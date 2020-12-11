import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListthemecomponentComponent } from './listthemecomponent/listthemecomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeComponent } from './listthemecomponent/theme/theme.component';
import { FormsModule } from '@angular/forms';
import { FormThemeComponent } from './form-theme/form-theme.component';
import { ThemeService } from 'src/services/theme.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    ListthemecomponentComponent,
    FormThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
