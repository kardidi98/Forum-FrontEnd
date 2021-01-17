import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  // @ViewChild(NgForm) editForm: NgForm;
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };
  showError:boolean = false;

  loginForm : FormGroup;

  constructor(private userService : UserService
    , private router: Router
    ,private notifyService : NotificationsService,
    private dialog: MatDialog,
     fb : FormBuilder) { 
      this.loginForm = fb.group({
        email : fb.control(this.user.email,[
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")
        ]),
        password : fb.control(this.user.password,[
          Validators.required,
        ])
      })
    }

  ngOnInit(): void {
  }

  initialzeUser(){
    this.loginForm.reset();
  }

  login(){
    
    const userAuth = {
      email : this.loginForm.get('email').value,
      password : this.loginForm.get('password').value
    }
    this.userService.login(userAuth).subscribe((response : any)=>{
      this.initialzeUser();
      this.notifyService.showSuccess("Connexion réussie!", "Succès", this.toasterConfig);
       localStorage.setItem("token", response.token)
       localStorage.setItem("auth", response.auth);
       localStorage.setItem("id", response.id);
       localStorage.setItem("admin", response.isAdmin);
       localStorage.setItem("username", userAuth.email);
       this.showError = false;
       this.dialog.closeAll()
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
