import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/modeles/Comment';
import { CommentService } from 'src/services/comment.service';
import { NotificationsService } from 'src/services/notifications.service';

@Component({
  selector: '[app-form-comment]',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.css']
})
export class FormCommentComponent implements OnInit {

  Comment : Comment = new Comment();
  btnType: string = "Soumettre";
  postId: any;
  @ViewChild(NgForm) editForm: NgForm;
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };


  constructor(private serviceComment: CommentService
    , private notifyService: NotificationsService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('postId');
        if (id) {
          this.postId = id;
          
        }
  
      }
    );
  }
  
  initialzeComment() {
    this.editForm.reset();
  }
  submitComment(){
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
}
