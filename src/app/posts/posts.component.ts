import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/modeles/Post';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any =[];
  constructor(private servicePost: PostService,
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
  }

  getUser(id:any){
    
  }
  
  

}
