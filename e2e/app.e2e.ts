import { FirebaseTestPage } from './app.po';

describe('firebase-test App', function() {
  let page: FirebaseTestPage;

  beforeEach(() => {
    page = new FirebaseTestPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('firebase-test works!');
  });
});
