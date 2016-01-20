describe('route testing', function () {

  it('the index page should not be undefined', function () {
    browser.get('/index.html');
    browser.getLocationAbsUrl().then(function (url) {
      expect(url).toEqual('/');
    });
  });

  it('the about page should not be undefined', function () {
    browser.get('/#/about/test1');
    expect(element(by.css('h1')).getText()).toBe('Hello About!!!');
  });

});
