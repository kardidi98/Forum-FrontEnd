import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/services/comment.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: '[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input() post: any;
  user : any;
  @Input() lenComment : any = 0;
  constructor(private serviceUser: UserService,
    private serviceComment:CommentService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.post){
      this.serviceUser.getById(this.post.user).subscribe((res)=>{
        this.user = res;
      })
      this.serviceComment.getByPost(this.post._id).subscribe((res : [])=>{
        this.lenComment = res.length;
      })
    }
  }
  getPost(){
    
    this.router.navigate(["/admin/posts/"+this.post._id])
  }

}
