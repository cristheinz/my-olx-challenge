import { MyOlxChallengePage } from './app.po';

describe('my-olx-challenge App', function() {
  let page: MyOlxChallengePage;

  beforeEach(() => {
    page = new MyOlxChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
