import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { PlansProvider } from '../../providers/plans/plans.provider';

@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html',
})
export class PlansPage {
  plans: Observable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private plansProvider: PlansProvider) 
  {
    this.plans = this.plansProvider.getAllPlans()
      //.subscribe(plans => { 
      //  this.plans = plans; 
      //  console.log(plans); 
      //})
  }

}

