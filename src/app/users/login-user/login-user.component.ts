import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/modeles/User';
import { NotificationsService } from 'src/services/notifications.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: '[app-login-user]',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user : User = new User();
  @ViewChild(NgForm) editForm: NgForm;
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };
  showError:boolean = false;

  constructor(private userService : UserService
    , private router: Router
    ,private notifyService : NotificationsService) { }

  ngOnInit(): void {
  }

  initialzeUser(){
    this.editForm.reset();
  }

  login(){
    
    const userAuth = {
      email : this.user.email,
      password : this.user.password
    }
    this.userService.login(userAuth).subscribe((response : any)=>{
      this.initialzeUser();
      this.notifyService.showSuccess("Connexion réussie!", "Succès", this.toasterConfig);
       localStorage.setItem("token", response.token)
       localStorage.setItem("auth", response.auth);
       localStorage.setItem("username", userAuth.email);
      setTimeout(()=>{
        window.location.reload();
      },2000)
    }, (err : HttpErrorResponse)=>{
      if(err.status === 401 || err.status === 404){
          this.showError = true;
      }
      
    })
    
    
  }
  logout(){
    localStorage.clear();
  }
  

}
