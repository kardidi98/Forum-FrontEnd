import { Component, OnInit, ViewChild } from '@angular/core';
import { Theme } from 'src/modeles/Theme';
import { NotificationsService } from 'src/services/notifications.service';
import { ThemeService } from 'src/services/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-theme',
  templateUrl: './form-theme.component.html',
  styleUrls: ['./form-theme.component.css']
})
export class FormThemeComponent implements OnInit {

  Theme: Theme = new Theme();
  forumId:any;
  Moderators: any = [];
  @ViewChild(NgForm) editForm: NgForm;
  formTitle: string = "Ajouter un thème:";
  btnType: string = "Soumettre";
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };


  constructor(private themeService: ThemeService
    , private notifyService: NotificationsService
    , private userService: UserService
    , private router: Router
    , private route: ActivatedRoute) { }

  initialzeTheme() {
    this.editForm.reset();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('themeId');
        const forumId = params.get('ForumId');
        if (id) {
          this.themeService.get(id).subscribe((data: Theme) => {
            this.Theme = data;
            this.formTitle = "Modifier le thème:";
            this.btnType = "Mettre A Jour"
          });
        }
        if(forumId){
          this.forumId = forumId
        }

      }
    );
    this.userService.getAll().subscribe((res) => {
      this.Moderators = res;
    })
  }
  submitTheme() {
    this.Theme.forum = this.forumId;
    if (this.Theme._id) {
      this.updateTheme(this.Theme)
    }
    else {
      this.themeService.add(this.Theme).subscribe(data => {
        this.initialzeTheme();
        this.notifyService.showSuccess("Thème ajouté avec succès!", "Succès", this.toasterConfig)
        setTimeout(() => {
          this.router.navigate(["/themes/forums/"+this.forumId]);
        }, 2000)

      },
        (err: HttpErrorResponse) => {
          if (err.status === 409) {
            this.notifyService.showError("Le titre que vous avez choisi existe déjà!", "Erreur", this.toasterConfig)
          }
          else {
            this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)

          }
        })

    }

  }

  updateTheme(theme: Theme) {
    this.themeService.update(theme).subscribe((res) => {
      this.initialzeTheme();
      this.notifyService.showSuccess("Thème mis à jour avec succès!", "Succès", this.toasterConfig)
      setTimeout(() => {
        this.router.navigate(["/themes/forums/"+this.forumId]);
      }, 2000)
    },
      err => {
        console.error(err)
        this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
      });
  }

  goHome() {
    this.router.navigate(["/accueil"]);
  }

  goThemes() {
    this.router.navigate(["/themes/forums/"+this.forumId]);
  }


}
