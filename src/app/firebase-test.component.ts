import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'firebase-test-app',
  templateUrl: 'firebase-test.component.html',
  styleUrls: ['firebase-test.component.css']
})

export class FirebaseTestAppComponent {
  title = 'firebase-test works!  It is a joy to use!';
  push: FirebaseListObservable <any[]>;
  set: FirebaseObjectObservable <any>;
  update: FirebaseObjectObservable <any>;

  constructor(af: AngularFire) {
    this.push = af.database.list('/webTest/push');
    this.set = af.database.object('/webTest/set');
    this.update = af.database.object('/webTest/update');
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

}
