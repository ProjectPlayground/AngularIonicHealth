import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlansPage } from '../plans/plans';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo() {
    this.navCtrl.push(PlansPage);
  }

}
