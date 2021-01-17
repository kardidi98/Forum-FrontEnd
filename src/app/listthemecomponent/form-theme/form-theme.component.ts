import { Component, OnInit, ViewChild } from '@angular/core';
import { Theme } from 'src/modeles/Theme';
import { NotificationsService } from 'src/services/notifications.service';
import { ThemeService } from 'src/services/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-form-theme',
  templateUrl: './form-theme.component.html',
  styleUrls: ['./form-theme.component.css']
})
export class FormThemeComponent implements OnInit {

  Theme: Theme = new Theme();
  forumId:any = localStorage.getItem("idForum");
  Moderators: any = [];
  // @ViewChild(NgForm) editForm: NgForm;
  formTitle: string = "Ajouter un thème:";
  btnType: string = "Soumettre";
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };

  themeForm : FormGroup

  constructor(private themeService: ThemeService
    , private notifyService: NotificationsService
    , private userService: UserService
    , private router: Router
    , private route: ActivatedRoute,
    fb : FormBuilder) {
      this.themeForm = fb.group({
        _id: fb.control(this.Theme._id),
        titre : fb.control(this.Theme.titre,[
          Validators.required,
        ]),
        description : fb.control(this.Theme.description,[
          Validators.required,
        ]),
        moderateur : fb.control(this.Theme.moderateur,[
          Validators.required,
        ])
      }) }

  initialzeTheme() {
    this.themeForm.reset();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('themeId');
        const forumId = params.get('ForumId');
        if (id) {
          this.themeService.get(id).subscribe((data: Theme) => {
            this.themeForm.get("_id").setValue(data._id);
            this.themeForm.get("titre").setValue(data.titre);
            this.themeForm.get("description").setValue(data.description);
            this.themeForm.get("moderateur").setValue(data.moderateur);
            this.themeForm.get("titre").disable();
            this.formTitle = "Modifier le thème:";
            this.btnType = "Mettre A Jour";
            
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
    this.Theme={
      _id:this.themeForm.get("_id").value,
      description: this.themeForm.get("description").value,
      forum : this.Theme.forum,
      moderateur:this.themeForm.get("moderateur").value,
      titre: this.themeForm.get("titre").value,
    }
    if (this.Theme._id) {
      this.updateTheme(this.Theme)
    }
    else {
      
      this.themeService.add(this.Theme).subscribe(data => {
        this.initialzeTheme();
        this.notifyService.showSuccess("Thème ajouté avec succès!", "Succès", this.toasterConfig)
        setTimeout(() => {
          this.router.navigate(["/admin/themes/forums/"+this.forumId]);
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
        this.router.navigate(["/admin/themes/forums/"+this.forumId]);
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
    this.router.navigate(["/admin/themes/forums/"+this.forumId]);
  }

  

}
