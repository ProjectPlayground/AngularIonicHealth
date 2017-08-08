import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';

import { ProfileSettingsPage } from '../profile/profile-settings/profile-settings';
import { ResetPasswordPage } from '../auth/reset-password/reset-password';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  fitlevel: number = 1800;
  weight: number = 70;
  height: number = 180;
  gender: string = "m";
  day: number;
  month: string;
  year: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider) 
  {
  }

  userEmail() {
    return firebase.auth().currentUser.email;
  }

  goToSettings(): void {
     this.navCtrl.push(ProfileSettingsPage); 
  }

  goToResetPassword(): void {
     this.navCtrl.push(ResetPasswordPage); 
  }

}
