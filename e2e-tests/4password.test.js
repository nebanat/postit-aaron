module.exports = {
  'it should throw an error if user enters a wrong email': (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/password')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('span.card-title')
      .assert.containsText('span.card-title', 'Recover Password')
      .assert.elementPresent('input#email')
      .assert.elementPresent('button#resetPassword')
      .assert.containsText('input#email', '')
      .setValue('input#email', 'abiliyok@gmail')
      .click('button#resetPassword')
      .pause(1500)
      .assert.urlEquals('http://localhost:3000/password')
      .assert.containsText('span#email', 'Please enter a valid email')
      .pause(1000)
      .end();
  },
  'it should throw an error if user enters email that is not in the system':
   (client) => {
     client
       .resizeWindow(1280, 800)
       .url('http://localhost:3000/password')
       .waitForElementVisible('body', 1000)
       .setValue('input#email', 'segunolalive@gmail.com')
       .click('button#resetPassword')
       .pause(1500)
       .assert.urlEquals('http://localhost:3000/password')
       .assert.containsText('div.toast', 'User does not exist in our records')
       .pause(1000)
       .end();
   },
  'it should send a password reset link with the correct email entered':
  (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/password')
      .waitForElementVisible('body', 400)
      .setValue('input#email', 'abiliyok@yahoo.com')
      .click('button#resetPassword')
      .pause(4000)
      .assert.urlEquals('http://localhost:3000/password')
      .assert
      .containsText('div.green', 'Reset password link has been sent to your email')
      .pause(1000)
      .end();
  }
};
