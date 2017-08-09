import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UsersProvider {
  public uid: any = firebase.auth().currentUser.uid;

  constructor() {
  }

  updateUserInfo(uid, fitlevel, height, weight, day, month, gender) {
    return firebase.database().ref().child(`userProfiles/${this.uid}/profile/info`)
    .update({
      fitlevel: fitlevel,
      height: height,
      weight: weight,
      day: day,
      month: month,
      gender: gender
    })
  }

}
