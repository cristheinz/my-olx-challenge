import { browser, element, by } from 'protractor';

export class MyOlxChallengePage {
  navigateTo() {
    return browser.get('/items');
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }
}
