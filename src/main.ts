import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FirebaseTestAppComponent, environment } from './app';
import { FIREBASE_PROVIDERS, defaultFirebase, AuthMethods,
  AuthProviders, firebaseAuthConfig } from 'angularfire2';


if (environment.production) {
  enableProdMode();
}

bootstrap(FirebaseTestAppComponent, [
  FIREBASE_PROVIDERS,
  firebaseAuthConfig({
    provider: AuthProviders.Twitter,
    method: AuthMethods.Redirect
  }),
  defaultFirebase('https://dcook-test1.firebaseio.com')
]);
