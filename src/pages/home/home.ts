import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';

import { ProfileSettingsPage } from '../profile/profile-settings/profile-settings';
import { SigninPage } from '../auth/signin/signin';
import { SignupPage } from '../auth/signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public authProvider: AuthProvider) 
  {
  }

  userEmail() {
    return firebase.auth().currentUser.email;
  }
  
  /*
  goTo() {
    if (this.isAuthenticated()) {
      return this.navCtrl.push(ProfilePage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Please sign in first!',
        buttons: ['Okay']
      });
      alert.present();
    }
  }
  */
  
  goTo() {this.navCtrl.push(ProfileSettingsPage);}
  
  
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
      message: 'Logout is succesful',
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

  isAuthenticated() {
    return this.authProvider.isAuthenticated();
  }

}
