import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods} from 'angularfire2';
import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'firebase-test-app',
  templateUrl: 'firebase-test.component.html',
  styleUrls: ['firebase-test.component.css'],
})

export class FirebaseTestAppComponent {
  title = 'firebase-test works!  It is a joy to use!';
  push: FirebaseListObservable <any[]>;
  set: FirebaseObjectObservable <any>;
  user: FirebaseObjectObservable <any>;
  update: FirebaseObjectObservable <any>;

  constructor(public af: AngularFire) {
    this.push = this.af.database.list('/webTest/push');
    this.set = this.af.database.object('/webTest/set');
    this.update = this.af.database.object('/webTest/update');
    this.af.auth.subscribe((auth) => {
      console.log(auth);
      if (!_.isNull(auth)) {
        //user is logged in

        console.log('user is authenticated');
        this.af.database.object('/users/' + auth.uid).subscribe((_user) => {
          if (_.isNull(_user)) {
            console.log('is new user');

            this.af.database.object('/users/' + auth.uid).set({
              'provider': this.getProvider(auth),
              'name': this.getName(auth)
            });
          }
        });


      }

      this.push = this.af.database.list('/webTest/push');
      this.set = this.af.database.object('/webTest/set');
      this.update = this.af.database.object('/webTest/update');
    });
  }

  setSet(set: string) {
    this.set.set(set);
  }

  updateUpdate(pemdos: string) {
    this.update.update({pemdos: pemdos});
  }

  pushPush(test1: string, test2: string) {
    this.push.push({
      test1: test1,
      test2: test2
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    });
  }

  getAuthID() {
    console.log(this.af.auth);
    return 5;
  }

  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

  getProvider(authData) {
    switch (authData.provider) {
      case 5:
        return 'anonymous';

    }
  }

  getName(authData) {
    switch (this.getProvider(authData)) {
      case 'password':
        return authData.password.email.replace(/@.*/, '');
      case 'twitter':
        return authData.twitter.displayName;
      case 'facebook':
        return authData.facebook.displayName;
      case 'anonymous':
        return 'Anonymous';
    }
  }

}
