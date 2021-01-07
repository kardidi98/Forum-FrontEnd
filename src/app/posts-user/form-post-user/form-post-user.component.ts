import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/modeles/Post';
import { NotificationsService } from 'src/services/notifications.service';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-form-post-user',
  templateUrl: './form-post-user.component.html',
  styleUrls: ['./form-post-user.component.css']
})
export class FormPostUserComponent implements OnInit {

  Post: Post = new Post;
  Moderators: any = [];
  @ViewChild(NgForm) editForm: NgForm;
  theme: any;
  formTitle: string = "Ajouter une publication:";
  btnType: string = "Soumettre";
  idForum:any = localStorage.getItem("idForum");

  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };

  constructor(private servicePost: PostService, private router: Router
    , private route: ActivatedRoute
    , private notifyService: NotificationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('idtheme');
        if (id) {
          this.theme = id;
        }

      }
    );
  }
  initialzePost() {
    this.editForm.reset();
  }

  submitPost() {
    this.Post.theme = this.theme;
    this.servicePost.add(this.Post).subscribe(res => {
      this.initialzePost();
      this.notifyService.showSuccess("Publication ajoutée avec succès!", "Succès", this.toasterConfig)
      setTimeout(() => {
        this.router.navigate(['posts/themes/'+this.theme]);
      }, 2000)
    },
    err => {
      console.error(err)
      this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
    })
  }
  goHome(){
    this.router.navigate(["/accueil"]);
  }

  goThemes(){
    this.router.navigate(["/themes/forums/"+this.idForum]);
  }
  goPosts(){
    this.router.navigate(["/posts/themes/"+this.theme]);
  }

}
