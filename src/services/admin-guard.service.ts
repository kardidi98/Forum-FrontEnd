import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ForbiddenComponent } from 'src/app/forbidden/forbidden.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private router:Router,private dialog: MatDialog) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem("admin") === "true"){
      return true;
    }
    else{
      this.dialog.open(ForbiddenComponent)
      this.router.navigateByUrl('/accueil')
      return false
    }
  }}
