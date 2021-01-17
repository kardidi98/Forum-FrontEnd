import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/modeles/User';
import { NotificationsService } from 'src/services/notifications.service';
import { UserService } from 'src/services/user.service';
import { LoginUserComponent } from '../login-user/login-user.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user : User = new User();
  // @ViewChild(NgForm) editForm: NgForm;
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };
  showError:boolean = false;

  registerForm : FormGroup;

  constructor(private userService : UserService
    ,private notifyService : NotificationsService,
    private dialog: MatDialog,
    fb : FormBuilder) {
      this.registerForm = fb.group({
        nom : fb.control(this.user.nom,[
          Validators.required,
        ]),
        prenom : fb.control(this.user.prenom,[
          Validators.required,
        ]),
        email : fb.control(this.user.email,[
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")
        ]),
        password : fb.control(this.user.password,[
          Validators.required,
          Validators.minLength(8)
        ])
      })
     }

  ngOnInit(): void {
  }

  initialzeUser(){
    this.registerForm.reset();
  }
  register(){
   this.user = {
     _id:this.user._id,
     nom: this.registerForm.get('nom').value,
     prenom: this.registerForm.get('prenom').value,
     email: this.registerForm.get('email').value,
     password: this.registerForm.get('password').value,
     isAdmin: this.user.isAdmin
   }
    
   this.userService.add(this.user).subscribe(res=>{
          this.initialzeUser();
          this.notifyService.showSuccess("Inscription réussie! connectez-vous maintenant.", "Succès", this.toasterConfig)
          this.showError = false;
          this.dialog.closeAll();
          this.dialog.open(LoginUserComponent)
       
        },
        (err : HttpErrorResponse) => {
          if(err.status === 409){
            this.showError = true
          }
          else{
            this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
          }
        })
      }

}
