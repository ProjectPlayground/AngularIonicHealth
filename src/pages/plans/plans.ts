import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the PlansPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html',
})
export class PlansPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlansPage');
  }

}
