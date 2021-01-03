import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: '[app-forum-user]',
  templateUrl: './forum-user.component.html',
  styleUrls: ['./forum-user.component.css']
})
export class ForumUserComponent implements OnInit {

  @Input() Forum: any
  themes: any = [];

  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };

  constructor(private router: Router,
    private serviceTheme: ThemeService) { }

  ngOnInit(): void {
    this.serviceTheme.getByForum(this.Forum._id).subscribe((res: any) => {
      this.themes = res

    })

  }

  linkToThemes() {
    localStorage.removeItem("idForum");
    localStorage.setItem("idForum", this.Forum._id);
    this.router.navigate(["/themes/forums/" + this.Forum._id])
  }

}
