import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListthemecomponentComponent } from './listthemecomponent/listthemecomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeComponent } from './listthemecomponent/theme/theme.component';
import { FormsModule } from '@angular/forms';
import { ThemeService } from 'src/services/theme.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormThemeComponent } from './listthemecomponent/form-theme/form-theme.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from 'src/services/user.service';
import { NotificationsService } from 'src/services/notifications.service';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    ListthemecomponentComponent,
    FormThemeComponent,
    UsersComponent,
    UserComponent,
    LoginUserComponent,
    RegisterUserComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    
  ],
  providers: [ThemeService, UserService, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
