import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/services/comment.service';
import { NotificationsService } from 'src/services/notifications.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: '[app-comment-user]',
  templateUrl: './comment-user.component.html',
  styleUrls: ['./comment-user.component.css']
})
export class CommentUserComponent implements OnInit {

  @Input() comment: any;
  user : any;
  postId : any;
  isAuth : any = localStorage.getItem("auth");
  userAuthId: any = localStorage.getItem("id");

  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };


  constructor(private serviceUser: UserService,
    private serviceComment: CommentService
    , private router: Router
    , private route: ActivatedRoute
    , private notifyService: NotificationsService) { }

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

  deleteComment(){
    if(confirm("Etes-vous sûre de vouloir supprimer votre commentaire ?")){
      this.serviceComment.delete(this.comment._id).subscribe((res)=>{
        this.notifyService.showSuccess("Commentaire supprimé avec succès!", "Succès", this.toasterConfig);
        window.location.reload()
      })
    }
  }

}
