import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/modeles/User';
import { NotificationsService } from 'src/services/notifications.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user : User = new User();
  @ViewChild(NgForm) editForm: NgForm;
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };


  constructor(private userService : UserService
    ,private notifyService : NotificationsService) { }

  ngOnInit(): void {
  }

  initialzeUser(){
    this.editForm.reset();
  }

  register(values: User){
    this.userService.getByEmail(values.email).subscribe(res => {
      
      if(!res){
        this.userService.add(values).subscribe(res=>{
          this.initialzeUser();
          this.notifyService.showSuccess("Inscription réussie!", "Succès", this.toasterConfig)
        },
        err => {
          this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
        })
      }
      else {
        this.notifyService.showError("L'e-mail que vous avez choisi existe déjà!", "Erreur", this.toasterConfig)
      }
    },
    err => {
      console.error(err)
      this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
    })
    
  }

}
