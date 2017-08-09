import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html',
})
export class NutritionPage {
  nutrition: string = "breakfast";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
