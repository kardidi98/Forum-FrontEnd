import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardService } from 'src/services/admin-guard.service';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { CommentsUserComponent } from './comments-user/comments-user.component';
import { CommentsComponent } from './comments/comments.component';
import { FormForumComponent } from './forums/form-forum/form-forum.component';
import { HomeComponent } from './home/home.component';
import { FormThemeComponent } from './listthemecomponent/form-theme/form-theme.component';
import { ListthemecomponentComponent } from './listthemecomponent/listthemecomponent.component';
import { FormPostUserComponent } from './posts-user/form-post-user/form-post-user.component';
import { PostsUserComponent } from './posts-user/posts-user.component';
import { PostsComponent } from './posts/posts.component';
import { ThemesUserComponent } from './themes-user/themes-user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:"accueil", component: HomeComponent},
  {path:"themes/forums/:idForum", component: ThemesUserComponent},
  {path:"admin/themes/forums/:idForum", component: ListthemecomponentComponent, canActivate:[AdminGuardService]},
  {path:"themes/:themeId", component: FormThemeComponent, canActivate : [AuthGuardService]},
  {path:"addTheme/forums/:ForumId", component: FormThemeComponent, canActivate : [AuthGuardService]},
  {path:"addForum", component: FormForumComponent},
  {path:"users", component: UsersComponent},
  {path:"posts/themes/:idTheme", component: PostsUserComponent},
  {path:"admin/posts/themes/:idTheme", component: PostsComponent, canActivate:[AdminGuardService]},
  {path:"addPost/themes/:idtheme", component: FormPostUserComponent, canActivate : [AuthGuardService]},
  {path:"admin/posts/:postId", component: CommentsComponent, canActivate:[AdminGuardService]},
  {path:"posts/:postId", component: CommentsUserComponent},
  {path:"posts/:postId/comments/:commentId", component: CommentsUserComponent, canActivate : [AuthGuardService]},
  
  {path: "", redirectTo:"/accueil", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
