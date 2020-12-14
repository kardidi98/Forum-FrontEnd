import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/modeles/User';
import { UserService } from 'src/services/user.service';

@Component({
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user: User;

  constructor(private serviceUser: UserService) { }

  ngOnInit(): void {
    
  }

  getUser(){
    
  }

}
