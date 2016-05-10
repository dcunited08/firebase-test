import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FirebaseTestAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(FirebaseTestAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://dcook-test1.firebaseio.com')
]);
