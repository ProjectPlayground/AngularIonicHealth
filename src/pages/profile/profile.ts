import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';
import { UsersProvider } from '../../providers/users/users.provider';

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
  day: number = 11;
  month: number = 10;
  // year: number = 1991;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    private usersProvider: UsersProvider) 
  {
  }

  userEmail() {
    return firebase.auth().currentUser.email;
  }

  saveUserInfo(): void {
    this.usersProvider.updateUserInfo(
      firebase.auth().currentUser.uid, 
      this.fitlevel, 
      this.height, 
      this.weight, 
      this.day, 
      this.month, 
      this.gender);
  }

  goToSettings(): void {
     this.navCtrl.push(ProfileSettingsPage); 
  }

  goToResetPassword(): void {
     this.navCtrl.push(ResetPasswordPage); 
  }

}
