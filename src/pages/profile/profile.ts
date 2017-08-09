import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ActionSheetController, Platform, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';
import { UsersProvider } from '../../providers/users/users.provider';

import { ProfileSettingsPage } from '../profile/profile-settings/profile-settings';
import { ResetPasswordPage } from '../auth/reset-password/reset-password';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {
  uid = firebase.auth().currentUser.uid;

  fitlevel: number = 1800;
  weight: number = 70;
  height: number = 180;
  gender: string = "m";
  day: number = 11;
  month: number = 10;
  // year: number = 1991;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    private usersProvider: UsersProvider) 
  {
  }

  ngOnInit() {
    // getUserInfo
    firebase.database().ref().child(`userProfiles/${this.uid}/profile/info`).once('value').then((snap) => {
      this.fitlevel = snap.val().fitlevel;
      this.height = snap.val().height;
      this.weight = snap.val().weight;
      this.day = snap.val().day;
      this.month = snap.val().month;
      this.gender = snap.val().gender;
    });
  }  
  
  changeImage() {
    let chooseImage = this.actionSheetCtrl.create({
      title: 'Profile picture',
      buttons: [
        {
          text: 'Change profile picture',
          icon: !this.platform.is('ios') ? 'settings' : null,
          handler: () => {
            this.goToSettings();
          }
        },{
          text: 'Cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    chooseImage.present();
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
      let alert = this.alertCtrl.create({
        title: 'Your settings are saved!'
      });
      alert.present();
  }

  goToSettings(): void {
     this.navCtrl.push(ProfileSettingsPage); 
  }

  goToResetPassword(): void {
     this.navCtrl.push(ResetPasswordPage); 
  }

}
