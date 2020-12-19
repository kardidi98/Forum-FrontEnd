import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/modeles/Post';
import { CommentService } from 'src/services/comment.service';
import { PostService } from 'src/services/post.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments : any  = [];
  post : any;
  postUser: any;
  showForm : boolean = false;
  constructor(private servicePost : PostService,
    private serviceComment : CommentService,
    private serviceUser: UserService,
    private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showForm = false;
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('postId');
        if (id) {
          this.servicePost.getById(id).subscribe((data:Post) => {
            this.post = data;
            this.serviceUser.getById(data.user).subscribe((res : any) => {
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
  goHome(){
    this.router.navigate(["/accueil"]);
  }

  goThemes(){
    this.router.navigate(["/themes"]);
  }
  goPosts(){
    this.router.navigate(["/posts/themes/"+this.post.theme]);
  }

  hideForm(target : any){
    this.showForm = !this.showForm;
    target.scrollIntoView();
  }


}
