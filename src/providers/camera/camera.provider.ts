import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class CameraProvider {

  constructor(
    public http: HttpClient,/*
    private camera: Camera,
    private options: CameraOptions*/) 
  {/*
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    */
  }
  
  /*
  getPicture() {
    this.camera.getPicture(this.options)
      .then((imageData) => {
         let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });
  }*/
  
}
