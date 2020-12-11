import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormThemeComponent } from './form-theme/form-theme.component';
import { ListthemecomponentComponent } from './listthemecomponent/listthemecomponent.component';


const routes: Routes = [
  {path:"themes", component: ListthemecomponentComponent},
  {path:"addTheme", component: FormThemeComponent},
  {path: "", redirectTo:"/themes", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
