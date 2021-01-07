import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/modeles/Theme';
import { NotificationsService } from 'src/services/notifications.service';
import { PostService } from 'src/services/post.service';
import { ThemeService } from 'src/services/theme.service';
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
  userId:any = localStorage.getItem('id')

  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };

  constructor(private router : Router,
    private serviceUser : UserService,
    private servicePost : PostService,
    private serviceTheme: ThemeService
    , private notifyService: NotificationsService) { }

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

  deleteTheme(){
    if(confirm("Etes-vous sûre de couloir supprimer ce thème ?")){
      this.serviceTheme.delete(this.Theme).subscribe((res)=>{
        this.notifyService.showSuccess("Thème supprimé avec succès!", "Succès", this.toasterConfig);
        window.location.reload()
      })
    }
    
  }
}
