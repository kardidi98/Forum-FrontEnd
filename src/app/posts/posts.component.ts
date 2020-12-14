import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/modeles/Post';
import { User } from 'src/modeles/User';
import { PostService } from 'src/services/post.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  users : any = [];
  constructor(private servicePost: PostService,
    private serviceUser : UserService,
     private router: Router
     , private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('idTheme');
        if (id) {
          this.servicePost.getByTheme(id).subscribe((data: Post) => {
            this.posts = data;
            
          });
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

}
