import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumService } from 'src/services/forum.service';
import { FormForumComponent } from './form-forum/form-forum.component';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit, OnDestroy {

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

openForumDialog(){
  this.dialog.open(FormForumComponent);
}


}
