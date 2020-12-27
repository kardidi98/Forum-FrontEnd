import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/modeles/Theme';
import { PostService } from 'src/services/post.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: '[app-theme-user]',
  templateUrl: './theme-user.component.html',
  styleUrls: ['./theme-user.component.css']
})
export class ThemeUserComponent implements OnInit {

  

  @Input() Theme : Theme;
  moderator : any;
  posts : any  = [];
  constructor(private router : Router,
    private serviceUser : UserService,
    private servicePost : PostService) { }

  ngOnInit(): void {
    
    if(this.Theme){
      
      this.serviceUser.getById(this.Theme.moderateur).subscribe((res)=>{
        this.moderator = res
        
      })
      this.servicePost.getByTheme(this.Theme._id).subscribe((res)=>{
        this.posts = res;
        
      })
    }
  }

  linkToPosts(){
    this.router.navigate(['posts/themes/'+this.Theme._id]);
  }

  getUser(){
    return this.moderator.filter(item => item._id === this.Theme.moderateur)
  }
}
