import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild(NgForm) editForm: NgForm;
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };
  showError:boolean = false;

  constructor(private userService : UserService
    ,private notifyService : NotificationsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  initialzeUser(){
    this.editForm.reset();
  }
  register(values: User){
   this.userService.add(values).subscribe(res=>{
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
