import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { FormThemeComponent } from './listthemecomponent/form-theme/form-theme.component';
import { ListthemecomponentComponent } from './listthemecomponent/listthemecomponent.component';
import { FormPostComponent } from './posts/form-post/form-post.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:"themes", component: ListthemecomponentComponent},
  {path:"themes/:themeId", component: FormThemeComponent},
  {path:"addTheme", component: FormThemeComponent},
  {path:"addTheme", component: FormThemeComponent},
  {path:"users", component: UsersComponent},
  {path:"posts/themes/:idTheme", component: PostsComponent},
  {path:"addPost/themes/:idtheme", component: FormPostComponent},
  {path:"posts/:postId", component: CommentsComponent},
  {path:"accueil", component: HomeComponent},
  {path: "", redirectTo:"/accueil", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
