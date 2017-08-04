import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs";
import * as firebase from 'firebase';

@Injectable()
export class UploadProvider {
  public uid: any = firebase.auth().currentUser.uid;

  constructor() {
  }  
  
  uploadProfileImage(user, img) {
    // Create a root reference
    let storageRef = firebase.storage().ref();

    let path = `/profile/${this.uid}`;
    var iRef = storageRef.child(path);
    iRef.putString(img, 'base64', {contentType: 'image/png'}).then((snapshot) => {
      console.log('Uploaded a blob or file! Now storing the reference at',`/profile/images/`);
      firebase.database().ref().child(`userProfiles/${this.uid}/profile/image`).update({ path: path, filename: this.uid })
    });
  }
/*
  getProfileImage(user) :  ReplaySubject<any>{
    let resultSubject = new ReplaySubject(1);
    let storage = firebase.storage();

    firebase.database.object(`userProfiles/${user.$key}/profile/image`)
      .subscribe(image => {
        console.log('image', image);
        if(image.path != null){
          console.log('one', image);
          var pathReference = storage.ref(image.path);
          pathReference.getDownloadURL().then(url => {
            let result = {image: url, path: image.path, filename: image.filename};
            console.log('two', result);
            resultSubject.next(result);
            //this.profileImage = result;
          });
        }
      });

    return resultSubject;
  }
*/
}
