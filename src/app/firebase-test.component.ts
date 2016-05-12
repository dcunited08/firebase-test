import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods} from 'angularfire2';


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
  update: FirebaseObjectObservable <any>;

  constructor(public af: AngularFire) {
    this.push = this.af.database.list('/webTest/push');
    this.set = this.af.database.object('/webTest/set');
    this.update = this.af.database.object('/webTest/update');
    this.af.auth.subscribe(auth => console.log(auth));
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

}
