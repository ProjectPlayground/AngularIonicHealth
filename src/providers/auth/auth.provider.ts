import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// import { Facebook } from '@ionic-native/facebook';

@Injectable()
export class AuthProvider {
  token: string;
  public userProfile: any = null;

  constructor() {
  }

  signInUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
          .then(
              (token: string) => this.token = token
          );
        }
      )
      .catch(
          error => console.log(error)
      );
  }

  signInWithFacebook(){
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(providerFacebook)
        .then(
          response => {
            this.getIdToken;
          }
        )
        .catch((error) => {
          error => console.log(error)
        });
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

  logoutUser() {
    firebase.auth().signOut();
    this.token = null;
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
