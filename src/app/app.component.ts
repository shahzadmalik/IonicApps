import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
//OneSignal
import { OneSignal } from '@ionic-native/onesignal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, /*private oneSignal:OneSignal*/) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'News', component: NewsPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Login', component: LoginPage }
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => { 

      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
     // this.initializeOnSignal();
    
    });    
  }
/*OnSignal Push Notification Setup
  initializeOnSignal(){
     //onesignal seetings
     this.oneSignal.startInit('84f51e6f-0227-4da9-8f7b-421864844fbf', '19393564684');

     this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

     this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
     });

     this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
       // do something when a notification is opened
       alert(JSON.stringify(jsonData));
     });

   this.oneSignal.endInit();
      
  }*/

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
