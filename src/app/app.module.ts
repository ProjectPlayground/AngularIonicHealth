import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileSettingsPage } from '../pages/profile/profile-settings/profile-settings';
import { ListPage } from '../pages/list/list';
import { PlansPage } from '../pages/plans/plans';
import { StepcounterPage } from '../pages/stepcounter/stepcounter';

import { SigninPage } from '../pages/auth/signin/signin';
import { SignupPage } from '../pages/auth/signup/signup';
import { ResetPasswordPage } from '../pages/auth/reset-password/reset-password';

import { Facebook } from '@ionic-native/facebook'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Stepcounter } from '@ionic-native/stepcounter'

import { PlansProvider } from '../providers/plans/plans.provider';
import { AuthProvider } from '../providers/auth/auth.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ProfileSettingsPage,
    ListPage,
    PlansPage,
    StepcounterPage,
    SigninPage,
    SignupPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ProfileSettingsPage,
    ListPage,
    PlansPage,
    StepcounterPage,
    SigninPage,
    SignupPage,
    ResetPasswordPage
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    Stepcounter,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlansProvider,
    AuthProvider
  ]
})
export class AppModule {}
