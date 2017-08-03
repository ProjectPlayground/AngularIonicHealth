import { Component } from '@angular/core';
import { AlertController, NavController, NavParams  } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../../providers/auth/auth.provider';

@Component({
  selector: 'page-profile-settings',
  templateUrl: 'profile-settings.html',
})
export class ProfileSettingsPage {  
  notifications: any = 'enable';

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider) 
  {
  }

  uploadImage() {
    let alert = this.alertCtrl.create({
      title: 'Upload image disabled',
      message: 'Upload image is currently disabled.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Upload disabled');
          }
        }
      ]
    });
    alert.present()
  }

}
