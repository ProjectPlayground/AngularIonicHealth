import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams  } from 'ionic-angular';
import { CropperSettings } from "ng2-img-cropper";
// import * as firebase from 'firebase';

import { AuthProvider } from '../../../providers/auth/auth.provider';
import { UploadProvider } from '../../../providers/upload/upload.provider';

@Component({
  selector: 'page-profile-settings',
  templateUrl: 'profile-settings.html',
})
export class ProfileSettingsPage implements OnInit {  
  data: any;
  cropperSettings: CropperSettings;

  changingImage: boolean; 
  notifications: any = 'enable';
  user: any;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    private uploadProvider: UploadProvider) 
  {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 120;
    this.cropperSettings.height = 120;
    this.cropperSettings.croppedWidth = 120;
    this.cropperSettings.croppedHeight = 120;
    this.cropperSettings.canvasWidth = 150;
    this.cropperSettings.canvasHeight = 200;
    this.cropperSettings.rounded = true

    this.data = {};
  }

  ngOnInit() {
    /*
    this.uploadProvider.getProfileImage(this.user)
    .subscribe(image => {
      this.data = image;
    })
    */
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

  changingImageClick() {
    this.changingImage = true;
  }

  saveNewImage() {
    if(this.data && this.data.image){
      this.uploadProvider.uploadProfileImage(this.user, this.data.image.split(/,(.+)/)[1])
     }
    this.changingImage = false;
  }

}
