import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';

import { StepcounterPage } from '../stepcounter/stepcounter';
import { SigninPage } from '../auth/signin/signin';
import { SignupPage } from '../auth/signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAuthenticated = false;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public authProvider: AuthProvider) 
  {
    this.isAuthenticated = this.authProvider.isAuthenticated()
  }

  userEmail() {
    return firebase.auth().currentUser.email;
  }

  goTo() {
    this.navCtrl.push(StepcounterPage);
  }
  
  goToSignup() {
     this.navCtrl.push(SignupPage);
  }
  
  goToSignin() {
     this.navCtrl.push(SigninPage);
  }

  onSignOut() {
     this.authProvider.logoutUser();
     let alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Logout is succesfull',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Succesfully logout');
          }
        }
      ]
    });
    alert.present();
  }

}
