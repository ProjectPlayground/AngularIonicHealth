// 3rd party modules
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ImageCropperComponent } from "ng2-img-cropper";

// Modules
import { AuthModule } from '../pages/auth/auth.module';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileSettingsPage } from '../pages/profile/profile-settings/profile-settings';
import { ListPage } from '../pages/list/list';
import { PlansPage } from '../pages/plans/plans';
import { PlansSettingsPage } from '../pages/plans/plans-settings/plans-settings';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { StepcounterPage } from '../pages/stepcounter/stepcounter';

// Plugins
import { Facebook } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Stepcounter } from '@ionic-native/stepcounter';
import { CameraPreview } from '@ionic-native/camera-preview';

// Services - Providers
import { PlansProvider } from '../providers/plans/plans.provider';
import { UploadProvider } from '../providers/upload/upload.provider';
import { CameraProvider } from '../providers/camera/camera.provider';
import { UsersProvider } from '../providers/users/users.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ProfileSettingsPage,
    ListPage,
    PlansPage,
    PlansSettingsPage,
    NutritionPage,
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
    NutritionPage,
    StepcounterPage,
    ImageCropperComponent
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    Stepcounter,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlansProvider,
    UploadProvider,
    CameraProvider,
    UsersProvider
  ]
})
export class AppModule {}
