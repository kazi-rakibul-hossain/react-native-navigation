describe('app', () => {
  beforeEach((done) => {
    global.simulator.relaunchApp(done);
  });

  it('shows welcome screen', () => {
    expect(elementByLabel('React Native Navigation!')).toBeVisible();
  });

  xit('switch to tab based app', () => {
    elementByLabel('Switch to tab based app').tap();
    expect(elementByLabel('This is a tab screen')).toBeVisible();
  });
});

function elementByLabel(label) {
  return element(by.label(label));
}