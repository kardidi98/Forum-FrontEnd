import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';
import { ListthemecomponentComponent } from './listthemecomponent/listthemecomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeComponent } from './listthemecomponent/theme/theme.component';
import { FormsModule } from '@angular/forms';
import { ThemeService } from 'src/services/theme.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { PostComponent } from './posts/post/post.component';
import { FormPostComponent } from './posts/form-post/form-post.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { PostService } from 'src/services/post.service';
import { CommentService } from 'src/services/comment.service';
import { FormCommentComponent } from './comments/form-comment/form-comment.component';
import { HttpinterceptorInterceptor } from 'src/interceptors/httpinterceptor.interceptor';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AuthGuardService } from 'src/services/auth-guard.service';

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
    PostsComponent,
    PostComponent,
    FormPostComponent,
    CommentsComponent,
    CommentComponent,
    FormCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    EditorModule
  ],
  providers: [
    ThemeService,
    UserService,
    NotificationsService,
    PostService,
    CommentService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
