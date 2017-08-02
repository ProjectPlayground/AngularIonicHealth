import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';

import { PlansPage } from '../plans/plans';
import { SigninPage } from '../auth/signin/signin';
import { SignupPage } from '../auth/signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAuthenticated = false;

  constructor(public navCtrl: NavController,
              public authProvider: AuthProvider) 
  {
      this.isAuthenticated = this.authProvider.isAuthenticated()
  }

  userEmail() {
    return firebase.auth().currentUser.email;
  }

  goTo() {
    this.navCtrl.push(PlansPage);
  }
  
  goToSignup() {
     this.navCtrl.push(SignupPage);
  }
  
  goToSignin() {
     this.navCtrl.push(SigninPage);
  }

  onSignOut() {
     this.authProvider.logoutUser();
  }

}
