import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ImageCropperComponent } from "ng2-img-cropper";

import { AuthModule } from '../pages/auth/auth.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileSettingsPage } from '../pages/profile/profile-settings/profile-settings';
import { ListPage } from '../pages/list/list';
import { PlansPage } from '../pages/plans/plans';
import { PlansSettingsPage } from '../pages/plans/plans-settings/plans-settings';
import { StepcounterPage } from '../pages/stepcounter/stepcounter';

import { Facebook } from '@ionic-native/facebook'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Stepcounter } from '@ionic-native/stepcounter'

import { PlansProvider } from '../providers/plans/plans.provider';
import { UploadProvider } from '../providers/upload/upload.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ProfileSettingsPage,
    ListPage,
    PlansPage,
    PlansSettingsPage,
    StepcounterPage,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    AuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ProfileSettingsPage,
    ListPage,
    PlansPage,
    PlansSettingsPage,
    StepcounterPage,
    ImageCropperComponent
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    Stepcounter,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlansProvider,
    UploadProvider
  ]
})
export class AppModule {}
