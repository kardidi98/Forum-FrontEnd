import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/modeles/Post';
import { CommentService } from 'src/services/comment.service';
import { PostService } from 'src/services/post.service';
import { UserService } from 'src/services/user.service';
import { LoginUserComponent } from '../users/login-user/login-user.component';

@Component({
  selector: 'app-comments-user',
  templateUrl: './comments-user.component.html',
  styleUrls: ['./comments-user.component.css']
})
export class CommentsUserComponent implements OnInit {

  comments: any = [];
  idForum:any = localStorage.getItem("idForum");
  post: any;
  postUser: any;
  showForm: boolean = false;
  isAuth : any = localStorage.getItem("auth");
  constructor(private servicePost: PostService,
    private serviceComment: CommentService,
    private serviceUser: UserService,
    private router: Router
    , private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.showForm = false;
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('postId');
        if (id) {
          this.servicePost.getById(id).subscribe((data: Post) => {
            this.post = data;
            this.serviceUser.getById(data.user).subscribe((res: any) => {
              this.postUser = res;
            });
          });
          this.serviceComment.getByPost(id).subscribe((data) => {
            this.comments = data;
          });

        }

      }
    );

  }
  goHome() {
    this.router.navigate(["/accueil"]);
  }

  goThemes() {
    this.router.navigate(["/themes/forums/"+this.idForum]);
  }
  goPosts() {
    this.router.navigate(["/posts/themes/" + this.post.theme]);
  }

  hideForm(target: any) {
    if (this.isAuth === "true") {
      setTimeout(() => {
        this.router.navigate(["/posts/" + this.post._id]);
        target.scrollIntoView();
      }, 1500);
      this.showForm = !this.showForm;
      
    }
    else{
      this.dialog.open(LoginUserComponent);
    }

  }

}
