import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ForumService } from 'src/services/forum.service';

@Component({
  selector: 'app-forums-user',
  templateUrl: './forums-user.component.html',
  styleUrls: ['./forums-user.component.css']
})
export class ForumsUserComponent implements OnInit {

  Forums: any=[] ;
  forumSubscription : Subscription;
  constructor(private forumService: ForumService,
    private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.forumSubscription.unsubscribe();
  }


ngOnInit(){
  this.forumService.getAll();
  this.forumSubscription = this.forumService.forumsSubject.subscribe((res:any)=>{
    this.Forums = res;
    
  })
  this.forumService.emitForumsSubject()
}
  

}
