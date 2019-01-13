import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { SettingsPage } from '../settings/settings';
//import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  val:any;
  constructor(public navCtrl: NavController, public navPrams: NavParams) {
    this.navPrams.get('val')
  }
  sendToHome(){
    this.navCtrl.push(HomePage);
  }
  sendToNews(){
    this.navCtrl.push(NewsPage);
  }
  sendToSettings(){
    this.navCtrl.push(SettingsPage);
  }

}
