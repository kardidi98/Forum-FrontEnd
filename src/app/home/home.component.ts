import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginUserComponent } from '../users/login-user/login-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuth:any = localStorage.getItem("auth")
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openLoginDialog() {
    this.dialog.open(LoginUserComponent);
  }
 

}
