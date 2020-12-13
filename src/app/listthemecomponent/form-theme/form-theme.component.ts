import { Component, OnInit, ViewChild } from '@angular/core';
import { Theme } from 'src/modeles/Theme';
import { NotificationsService } from 'src/services/notifications.service';
import { ThemeService } from 'src/services/theme.service';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-theme',
  templateUrl: './form-theme.component.html',
  styleUrls: ['./form-theme.component.css']
})
export class FormThemeComponent implements OnInit {

  Theme :Theme = new Theme();
  @ViewChild(NgForm) editForm: NgForm;
  formTitle: string = "Ajouter un thème:";
  btnType:string = "Soumettre";
  toasterConfig = {duration : 1000, closeButton: true, positionClass: "toast-top-right"};


  constructor(private  themeService: ThemeService
    ,private notifyService : NotificationsService
    ,private router : Router
    ,private route: ActivatedRoute) {}

  initialzeTheme(){
    this.editForm.reset();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
          const id = params.get('themeId');
          if(id){
            this.themeService.get(id).subscribe((data: Theme) => {
            this.Theme = data;
            this.formTitle = "Modifier le thème:";
            this.btnType="Mettre A Jour"
          });
          }
           
      }
  );
  }
  submitTheme(values: Theme){
    if(this.Theme._id){
      this.updateTheme(this.Theme)
    }
    else{
      this.Theme = values;

    this.themeService.getByTitle(this.Theme.titre).subscribe((res)=>{
       
      if(!res[0]){
        
        this.themeService.add(this.Theme).subscribe(res=>{
          this.initialzeTheme();
          this.notifyService.showSuccess("Thème ajouté avec succès!", "Succès",this.toasterConfig)
          setTimeout(()=>{
            this.router.navigate(['themes']);
          }, 2000)

        },
        err =>{
          console.error(err)
          this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
        })
        
      }
      else{
        this.notifyService.showError("Le titre que vous avez choisi existe déjà!", "Erreur",this.toasterConfig)
      }
    },
    err =>{
      console.error(err)
      this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
    })
    }
    
  }

  updateTheme(theme: Theme){
    this.themeService.update(theme).subscribe((res)=>{
      this.initialzeTheme();
          this.notifyService.showSuccess("Thème mis à jour avec succès!", "Succès",this.toasterConfig)
          setTimeout(()=>{
            this.router.navigate(['themes']);
          }, 2000)
    },
    err =>{
      console.error(err)
      this.notifyService.showError("Erreur dans le serveur, essayer plus tard!", "Erreur", this.toasterConfig)
    });
  }
}
