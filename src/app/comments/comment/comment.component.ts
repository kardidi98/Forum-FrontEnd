import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: '[app-comment]',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: any;
  user : any;
  postId : any;
  isAuth : any = localStorage.getItem("auth");
  constructor(private serviceUser: UserService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.comment){
      
      this.serviceUser.getById(this.comment.user).subscribe((res)=>{
        this.user = res;
      })
    }
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('postId');
        if (id) {
          this.postId = id;
          
        }
        
      }
    );
  }
  editComment(id){
      this.router.navigate(['/posts/'+this.postId+"/comments/"+this.comment._id]);
    
      const target = document.getElementById(id);
        
      target.scrollIntoView();
    
  }
  

}
