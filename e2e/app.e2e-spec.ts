import { MyOlxChallengePage } from './app.po';

describe('my-olx-challenge App', function() {
  let page: MyOlxChallengePage;

  beforeEach(() => {
    page = new MyOlxChallengePage();
  });

  it('should display message saying Lorem ipsum', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Lorem ipsum');
  });
});
