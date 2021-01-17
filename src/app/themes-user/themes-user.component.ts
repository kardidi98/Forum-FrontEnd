import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-themes-user',
  templateUrl: './themes-user.component.html',
  styleUrls: ['./themes-user.component.css']
})
export class ThemesUserComponent implements OnInit {

  Themes: any = [];
  ForumId:any;
  keyword = "";
  isAuth:any = localStorage.getItem("username");
  
  constructor(private router : Router,private  themeService: ThemeService ,
    private route:ActivatedRoute) { }

  

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=>{
      const forumId = params.get("idForum");
      if(forumId){
        this.ForumId = forumId;
        this.themeService.getByForum(forumId).subscribe((res:any)=>{
          this.Themes = res;
        })
      }
    })
}
  chercherParMotCle(motCle:any){
    this.keyword = "";
  }
  goHome(){
    this.router.navigate(["/accueil"]);
  }

}
