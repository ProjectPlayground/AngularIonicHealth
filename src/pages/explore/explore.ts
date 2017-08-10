import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AlertController, NavController, ActionSheetController, Platform, NavParams } from 'ionic-angular';
import { size } from "lodash";
import * as firebase from 'firebase';

import { FollowProvider } from '../../providers/follow/follow.provider';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage implements OnInit, OnDestroy {
  
  followerCount: number;
  isFollowing: boolean;
  followers;
  following;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,
    public navParams: NavParams,
    private followProvider: FollowProvider) 
  {
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }


}
