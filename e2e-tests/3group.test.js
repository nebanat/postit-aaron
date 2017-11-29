module.exports = {
  'it should successfully create a group and redirects to dashboard': (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'abiliyok')
      .setValue('input#password', 'topper234')
      .click('button#login')
      .pause(1000)
      .click('a.btn')
      .setValue('input#name', 'Laravel group')
      .setValue('textarea#description', 'laravel description')
      .click('button#create-group')
      .pause(1500)
      .assert.urlEquals('http://localhost:3000/dashboard')
      .assert.containsText('div.toast', 'Group successfully created')
      .pause(1000)
      .end();
  },
  'it should successfully post a mesage to group': (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'abiliyok')
      .setValue('input#password', 'topper234')
      .click('button#login')
      .pause(1000)
      .click('a.purple-text')
      .pause(1000)
      .setValue('input.browser-default', 'Hello laravel fellows')
      .pause(1000)
      .submitForm('#new-message-form')
      .pause(1000)
      .assert.containsText('p#message', 'Hello laravel fellows')
      .assert.containsText('div.toast', 'Message sent successfully')
      .pause(1000);
  },
  'it should show message if search result returns empty': (client) => {
    client
      .click('div.collapsible-header')
      .pause(1000)
      .click('a.modal-trigger')
      .setValue('input[type=text]', 'john')
      .pause(1000)
      .assert.containsText('p.red-text', 'No user found')
      .pause(1000);
  },
  'it should successfully add user to group': (client) => {
    client
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'biliyok')
      .click('button.btn-small')
      .pause(2000)
      .assert.containsText('div.toast', 'User successfully added to group')
      .click('a.modal-close')
      .pause(1000);
  },
  'it should successfully delete the group and redirect to dashboard': (client) => {
    client
      .click('i.dropdown-button')
      .pause(1500)
      .click('button#delete-group')
      .click('button.swal-button--confirm')
      .pause(1500)
      .assert.containsText('div.toast', 'Group successfully deleted')
      .assert.urlEquals('http://localhost:3000/dashboard')
      .pause(1000)
      .end();
  },
};
