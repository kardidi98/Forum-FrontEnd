import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  // @ViewChild(NgForm) editForm: NgForm;
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };
  isAuth:any = localStorage.getItem("auth");

  commentForm : FormGroup

  constructor(private serviceComment: CommentService
    , private notifyService: NotificationsService
    , private router: Router
    , private route: ActivatedRoute, fb: FormBuilder) {
      this.commentForm = fb.group({
        _id: fb.control(this.Comment._id),
        message : fb.control(this.Comment.message,[
          Validators.required,
        ]),
        description : fb.control(this.Comment.description,[
          Validators.required,
        ]),
      }) 
     }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('postId');
        const commentId = params.get('commentId');
        if (id) {
          this.postId = id;
          
        }
        if(commentId){
          this.serviceComment.getById(commentId).subscribe((data: Comment)=>{
            this.commentForm.get("_id").setValue(data._id);
            this.commentForm.get("message").setValue(data.message);
            this.commentForm.get("description").setValue(data.description);
          })
          this.btnType="Modifier"
        }
  
      }
    );
  }

 
  initialzeComment() {
    this.commentForm.reset();
  }
  submitComment(){
    this.Comment={
      _id:this.commentForm.get("_id").value,
      description: this.commentForm.get("description").value,
      message:this.commentForm.get("message").value,
      post: this.postId,
      user:this.Comment.user
    }
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
        this.router.navigateByUrl('/posts/'+this.postId);
  
    })
  }
}
