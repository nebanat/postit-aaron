module.exports = {
  'it should throw an error if password is less than 6 characters':
  (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signup')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('input#username')
      .assert.elementPresent('input#email')
      .assert.elementPresent('input#password')
      .assert.elementPresent('input#confirmPassword')
      .assert.elementPresent('button#register')
      .assert.elementPresent('footer.page-footer')
      .setValue('input#username', 'biliyok')
      .setValue('input#email', 'biliyok@yahoo.com')
      .setValue('input#password', 'top')
      .setValue('input#confirmPassword', 'top')
      .click('button#register')
      .pause(1000)
      .assert
      .containsText('div.toast', 'password must be at least 6 characters')
      .pause(1000)
      .end();
  },
  'it should show an error if passwords do not match': (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signup')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'neban')
      .setValue('input#email', 'neban@yahoo.com')
      .setValue('input#password', 'topper234')
      .setValue('input#confirmPassword', 'topper123')
      .click('button#register')
      .pause(1000)
      .assert
      .containsText('span#password', 'Confirm password does not match password')
      .pause(1000)
      .end();
  },
  'it should show an error if user enters wrong email': (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signup')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'neban')
      .setValue('input#email', 'neban@yahoo')
      .setValue('input#password', 'topper234')
      .setValue('input#confirmPassword', 'topper234')
      .click('button#register')
      .pause(1000)
      .assert.containsText('span#email', 'Please enter a valid email')
      .pause(1000)
      .end();
  },
  'it should successfully signup user and redirect to the sign in page':
  (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signup')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'abiliyok')
      .setValue('input#email', 'abiliyok@yahoo.com')
      .setValue('input#password', 'topper234')
      .setValue('input#confirmPassword', 'topper234')
      .click('button#register')
      .pause(1000)
      .assert.urlEquals('http://localhost:3000/signin')
      .pause(1000)
      .end();
  },
  'it should show signup another user': (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signup')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'biliyok')
      .setValue('input#email', 'biliyok@yahoo.com')
      .setValue('input#password', 'topper234')
      .setValue('input#confirmPassword', 'topper234')
      .click('button#register')
      .pause(1000)
      .assert.urlEquals('http://localhost:3000/signin')
      .pause(1000)
      .end();
  }
};

