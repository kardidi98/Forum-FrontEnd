import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/services/notifications.service';
import { UserService } from 'src/services/user.service';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Forum';
  currentYear = new Date().getFullYear();
  isAuth: any = localStorage.getItem("auth");
  Username: any = localStorage.getItem("username");
  
  toasterConfig = { duration: 1000, closeButton: true, positionClass: "toast-top-right" };
  constructor(private dialog: MatDialog,
    private notifyService: NotificationsService,
    private serviceUser: UserService,
    private router:Router) {}

    

  openLoginDialog() {
    this.dialog.closeAll();
    this.dialog.open(LoginUserComponent);
  }
  openRegisterDialog(){
    this.dialog.closeAll();
    this.dialog.open(RegisterUserComponent);
  }
  logout(){
    this.serviceUser.logout();
    this.notifyService.showSuccess("Déconnexion réussie! revisitez-nous.", "Succès", this.toasterConfig);
    
    setTimeout(() => {
      
      window.location.reload()
    }, 2000);
  }
  
}
