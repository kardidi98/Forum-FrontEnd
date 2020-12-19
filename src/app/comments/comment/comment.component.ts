import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: '[app-comment]',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: any;
  user : any;
  constructor(private serviceUser: UserService) { }

  ngOnInit(): void {
    if(this.comment){
      
      this.serviceUser.getById(this.comment.user).subscribe((res)=>{
        this.user = res;
      })
    }
  }

}
