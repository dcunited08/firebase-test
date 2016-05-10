import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FirebaseTestAppComponent } from '../app/firebase-test.component';

beforeEachProviders(() => [FirebaseTestAppComponent]);

describe('App: FirebaseTest', () => {
  it('should create the app',
      inject([FirebaseTestAppComponent], (app: FirebaseTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'firebase-test works!\'',
      inject([FirebaseTestAppComponent], (app: FirebaseTestAppComponent) => {
    expect(app.title).toEqual('firebase-test works!');
  }));
});
