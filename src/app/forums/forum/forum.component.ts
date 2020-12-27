import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from 'src/services/forum.service';
import { NotificationsService } from 'src/services/notifications.service';
import { PostService } from 'src/services/post.service';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: '[app-forum]',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  @Input() Forum:any
  themes: any=[];

  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };

  constructor(private router : Router,private serviceForum: ForumService,
    private servicePost: PostService,
    private serviceTheme: ThemeService
    , private notifyService: NotificationsService) { }

  ngOnInit(): void {
    this.serviceTheme.getByForum(this.Forum._id).subscribe((res:any)=>{
      this.themes = res

    })
    
    
  }

  linkToThemes(){
    this.router.navigate(["/admin/themes/forums/"+this.Forum._id])
  }

  delForum(){
    if(confirm("Etes-vous sûr de vouloir supprimer ce forum ?")){
        this.serviceForum.delete(this.Forum._id).subscribe((res)=>{
        this.notifyService.showSuccess("Forum supprimé avec succès!", "Succès", this.toasterConfig);
        window.location.reload()
      })
    }
    
  }

}
