import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';
import { ListthemecomponentComponent } from './listthemecomponent/listthemecomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeComponent } from './listthemecomponent/theme/theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { PostService } from 'src/services/post.service';
import { CommentService } from 'src/services/comment.service';
import { HttpinterceptorInterceptor } from 'src/interceptors/httpinterceptor.interceptor';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { ForumsComponent } from './forums/forums.component';
import { ForumComponent } from './forums/forum/forum.component';
import { FormForumComponent } from './forums/form-forum/form-forum.component';
import { ForumService } from 'src/services/forum.service';
import { ForumsUserComponent } from './forums-user/forums-user.component';
import { ThemesUserComponent } from './themes-user/themes-user.component';
import { ThemeUserComponent } from './themes-user/theme-user/theme-user.component';
import { ForumUserComponent } from './forums-user/forum-user/forum-user.component';
import { PostsUserComponent } from './posts-user/posts-user.component';
import { PostUserComponent } from './posts-user/post-user/post-user.component';
import { FormPostUserComponent } from './posts-user/form-post-user/form-post-user.component';
import { CommentsUserComponent } from './comments-user/comments-user.component';
import { CommentUserComponent } from './comments-user/comment-user/comment-user.component';
import { FormCommentUserComponent } from './comments-user/form-comment-user/form-comment-user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

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
    CommentsComponent,
    CommentComponent,
    ForumsComponent,
    ForumComponent,
    FormForumComponent,
    ForumsUserComponent,
    ThemesUserComponent,
    ThemeUserComponent,
    ForumUserComponent,
    PostsUserComponent,
    PostUserComponent,
    FormPostUserComponent,
    CommentsUserComponent,
    CommentUserComponent,
    FormCommentUserComponent,
    ForbiddenComponent
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
    EditorModule,
    ReactiveFormsModule
  ],
  providers: [
    ThemeService,
    UserService,
    NotificationsService,
    PostService,
    CommentService,
    AuthGuardService,
    ForumService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
