import { Component, ViewChild, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PlansPage } from '../pages/plans/plans';
import { SigninPage } from '../pages/auth/signin/signin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  //
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Plans', component: PlansPage },
      { title: 'Auth', component: SigninPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDmy-4o2xdRWXDdpjmPszAlwdzSsu_dBk4",
      authDomain: "angular-ionic-health.firebaseapp.com",
      databaseURL: "https://angular-ionic-health.firebaseio.com",
      projectId: "angular-ionic-health",
      storageBucket: "angular-ionic-health.appspot.com",
      messagingSenderId: "138237208210"
    });
  }
}
