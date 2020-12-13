import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private userService : UserService
    ,private notifyService : NotificationsService) { }

  ngOnInit(): void {
  }

  initialzeUser(){
    this.editForm.reset();
  }

  login(user: User){
    this.userService.add(user).subscribe(res=>{
      this.initialzeUser();
    })
  }

}
