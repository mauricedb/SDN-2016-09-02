import { SdnMoviesPage } from './app.po';

describe('sdn-movies App', function() {
  let page: SdnMoviesPage;

  beforeEach(() => {
    page = new SdnMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
