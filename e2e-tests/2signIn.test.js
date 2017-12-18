module.exports = {
  'it should toast an error if user tries to signin with wrong username or password':
  (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('nav.purple')
      .assert.elementPresent('div.login-form')
      .assert.elementPresent('div.card')
      .assert.elementPresent('div.card-content')
      .assert.elementPresent('input#username')
      .assert.elementPresent('input#password')
      .assert.elementPresent('button#login')
      .assert.elementPresent('footer.page-footer')
      .assert.elementPresent('a.left')
      .assert.elementPresent('a.right')
      .assert.containsText('h4.white-text', 'PostIt Messaging')
      .assert.containsText('span.card-title', 'Sign In')
      .setValue('input#username', 'konvict')
      .setValue('input#password', 'topper')
      .click('button#login')
      .pause(1000)
      .assert.containsText('.toast', 'Invalid username or password')
      .assert.urlEquals('http://localhost:3000/signin')
      .pause(1000)
      .end();
  },
  'it should successfully sign in user and redirect to dashboard': (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'abiliyok')
      .setValue('input#password', 'topper234')
      .click('button#login')
      .pause(1000)
      .assert.urlEquals('http://localhost:3000/dashboard')
      .assert.containsText('.toast', 'Welcome abiliyok')
      .assert.elementPresent('a.modal-trigger')
      .assert.elementPresent('h4.not-found-header')
      .assert.elementPresent('p.not-found-body')
      .assert.containsText('h4.not-found-header', 'You have no groups')
      .assert.containsText('p.not-found-body', 'Please create a group')
      .pause(1000)
      .end();
  },
};
