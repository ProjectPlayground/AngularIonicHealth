import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class CameraProvider {

  constructor(
    public http: HttpClient,
    private camera: Camera,
    private options: CameraOptions) 
  {
  }
  
  
}
