import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/modeles/Comment';
import { CommentService } from 'src/services/comment.service';
import { NotificationsService } from 'src/services/notifications.service';

@Component({
  selector: '[app-form-comment-user]',
  templateUrl: './form-comment-user.component.html',
  styleUrls: ['./form-comment-user.component.css']
})
export class FormCommentUserComponent implements OnInit {

  Comment : Comment = new Comment();
  btnType: string = "Soumettre";
  postId: any;
  @ViewChild(NgForm) editForm: NgForm;
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };
  isAuth:any = localStorage.getItem("auth");

  constructor(private serviceComment: CommentService
    , private notifyService: NotificationsService
    , private router: Router
    , private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('postId');
        const commentId = params.get('commentId');
        if (id) {
          this.postId = id;
          
        }
        if(commentId){
          this.serviceComment.getById(commentId).subscribe((res: any)=>{
            this.Comment = res
          })
          this.btnType="Modifier"
        }
  
      }
    );
  }

 
  initialzeComment() {
    this.editForm.reset();
  }
  submitComment(){
    if(this.Comment._id){
      this.updateComment()
    }
    this.serviceComment.add(this.postId,this.Comment).subscribe((res)=>{
            this.initialzeComment();
            this.notifyService.showSuccess("Commentaire ajouté avec succès!", "Succès", this.toasterConfig)
            setTimeout(() => {
              window.location.reload();
            }, 3000)

          },
            err => {
              console.error(err)
              this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
          })
    
  }
  updateComment(){
    this.serviceComment.update(this.Comment).subscribe((res)=>{
      this.notifyService.showSuccess("Commentaire mis à jour avec succès!", "Succès", this.toasterConfig)
        console.log(this.postId);
        
      setTimeout(() => {
              window.location.reload();
              
        }, 3000)
    })
  }
}
