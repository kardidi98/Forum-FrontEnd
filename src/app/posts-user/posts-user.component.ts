import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from 'src/services/forum.service';
import { PostService } from 'src/services/post.service';
import { ThemeService } from 'src/services/theme.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.css']
})
export class PostsUserComponent implements OnInit {

  posts: any = [];
  users : any = [];
  themeId:any;
  forumId:any;
  constructor(private servicePost: PostService,private serviceTheme:ThemeService,
    private serviceUser : UserService,private serviceForum:ForumService,
     private router: Router
     , private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('idTheme');
        if (id) {
          this.themeId = id;
          this.servicePost.getByTheme(id).subscribe((data) => {
            this.posts = data;
          });
          this.serviceTheme.get(id).subscribe((res:any)=>{
            if(res){
              this.serviceForum.getById(res.forum).subscribe((forum:any)=>{
                this.forumId = forum._id;
              })
            }
        })
        }

      }
    );
    this.serviceUser.getAll().subscribe((res)=>{
      this.users = res
    })
  }
  
  getUser(id:any){
    return this.users.filter(item => item._id === id)
  }
  goHome(){
    this.router.navigate(["/accueil"]);
  }

  goThemes(){
    this.router.navigate(["/themes/forums/"+this.forumId]);
  }

  NewPost(){
    this.router.navigate(["/addPost/themes/"+this.themeId]);
  }

}
