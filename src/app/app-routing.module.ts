import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { FormThemeComponent } from './listthemecomponent/form-theme/form-theme.component';
import { ListthemecomponentComponent } from './listthemecomponent/listthemecomponent.component';
import { FormPostComponent } from './posts/form-post/form-post.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:"themes", component: ListthemecomponentComponent},
  {path:"themes/:themeId", component: FormThemeComponent, canActivate : [AuthGuardService]},
  {path:"addTheme", component: FormThemeComponent, canActivate : [AuthGuardService]},
  {path:"users", component: UsersComponent},
  {path:"posts/themes/:idTheme", component: PostsComponent},
  {path:"addPost/themes/:idtheme", component: FormPostComponent, canActivate : [AuthGuardService]},
  {path:"posts/:postId", component: CommentsComponent},
  {path:"posts/:postId/comments/:commentId", component: CommentsComponent, canActivate : [AuthGuardService]},
  {path:"accueil", component: HomeComponent},
  {path: "", redirectTo:"/accueil", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
