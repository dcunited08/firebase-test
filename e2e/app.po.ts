export class FirebaseTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('firebase-test-app h1')).getText();
  }
}
