import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Forum } from 'src/modeles/Forum';
import { ForumService } from 'src/services/forum.service';
import { NotificationsService } from 'src/services/notifications.service';

@Component({
  selector: 'app-form-forum',
  templateUrl: './form-forum.component.html',
  styleUrls: ['./form-forum.component.css']
})
export class FormForumComponent implements OnInit {

  Forum: Forum = new Forum();
  // @ViewChild(NgForm) editForm: NgForm;
  formTitle: string = "Ajouter un forum:";
  btnType: string = "Ajouter";
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };
  constructor(private serviceForum: ForumService
    , private notifyService: NotificationsService,
    fb:FormBuilder) { 
      this.forumForm = fb.group({
        titre : fb.control(this.Forum.titre,[
          Validators.required,
        ])
      })
    }

  forumForm: FormGroup  
  ngOnInit(): void {
  }

  initialzeForum() {
    this.forumForm.reset();
  }

  submitForum() {
    this.Forum={
      _id: this.Forum._id,
      titre: this.forumForm.get('titre').value
    }
    this.serviceForum.add(this.Forum).subscribe((res: any) => {
      this.initialzeForum();
      this.notifyService.showSuccess("Forum ajouté avec succès!", "Succès", this.toasterConfig)
      window.location.reload();
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
