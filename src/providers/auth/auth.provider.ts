import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';

@Injectable()
export class AuthProvider {
  public userProfile: any = null;

  constructor(private facebook: Facebook) {
  }

  signInUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signInWithFacebook(){
    this.facebook.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential)
      .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
      })
      .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
      });
    }).catch((error) => { console.log(error) });
  }

  signUpUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {
        firebase.database().ref('/userProfiles').child(newUser.uid)
        .set({ email: email });
    });
  }
  
  resetPassword(email: string): firebase.Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<void> {
    return firebase.auth().signOut();
  }

}
