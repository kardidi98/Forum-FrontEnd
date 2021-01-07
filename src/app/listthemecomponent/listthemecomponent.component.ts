import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-listthemecomponent',
  templateUrl: './listthemecomponent.component.html',
  styleUrls: ['./listthemecomponent.component.css']
})
export class ListthemecomponentComponent implements OnInit {
  Themes: any = [];
  ForumId:any;
  keyword = "";
  
  constructor(private router : Router,private  themeService: ThemeService,
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

  addTheme(){
    this.router.navigate(["/admin/addTheme/forums/"+this.ForumId]);
  }

 

}
