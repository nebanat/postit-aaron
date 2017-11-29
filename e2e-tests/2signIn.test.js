module.exports = {
  'it should toast an error if user tries to sign in with wrong username and password combination': (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'konvict')
      .setValue('input#password', 'topper')
      .click('button#login')
      .pause(1000)
      .assert.containsText('.toast', 'Invalid username or password')
      .assert.urlEquals('http://localhost:3000/signin')
      .pause(1000)
      .end();
  },
  'it should successfully sign in user when correct username and password combination is provided, and redirect to dashboard': (client) => {
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
      .pause(1000)
      .end();
  },
};
