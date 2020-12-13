import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Forum';
  constructor(private dialog: MatDialog) {}

  openLoginDialog() {
    this.dialog.open(LoginUserComponent);
  }
  openRegisterDialog(){
    this.dialog.open(RegisterUserComponent);
  }
}
