import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';

import { ResetPasswordPage } from '../auth/reset-password/reset-password';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  fitlevel: number = 1800;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider) 
  {
  }

  userEmail() {
    return firebase.auth().currentUser.email;
  }

  goToResetPassword(): void {
     this.navCtrl.push(ResetPasswordPage); 
  }

}
