import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PlansPage } from '../pages/plans/plans';

import { SigninPage } from '../pages/auth/signin/signin';
import { SignupPage } from '../pages/auth/signup/signup';
import { ResetPasswordPage } from '../pages/auth/reset-password/reset-password';

import { Facebook } from '@ionic-native/facebook'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PlansProvider } from '../providers/plans/plans.provider';
import { AuthProvider } from '../providers/auth/auth.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PlansPage,
    SigninPage,
    SignupPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PlansPage,
    SigninPage,
    SignupPage,
    ResetPasswordPage
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlansProvider,
    AuthProvider
  ]
})
export class AppModule {}
