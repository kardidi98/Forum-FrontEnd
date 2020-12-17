import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: '[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input() post: any;
  user : any;
  constructor(private serviceUser: UserService) { }

  ngOnInit(): void {
    if(this.post){
      this.serviceUser.getById(this.post.user).subscribe((res)=>{
        this.user = res;
      })
    }
  }

}
