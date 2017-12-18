module.exports = {
  'it should throw an error if user enters group name with spaces':
  (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'abiliyok')
      .setValue('input#password', 'topper234')
      .click('button#login')
      .pause(1000)
      .click('a.btn')
      .assert.elementPresent('input#name')
      .assert.elementPresent('textarea#description')
      .assert.elementPresent('button#create-group')
      .setValue('input#name', 'Laravel group')
      .setValue('textarea#description', 'laravel description')
      .click('button#create-group')
      .pause(1500)
      .assert.urlEquals('http://localhost:3000/dashboard')
      .assert.containsText('span#name', 'group name not allowed to have spaces')
      .pause(1000)
      .end();
  },
  'it should successfully create a group and redirects to dashboard':
   (client) => {
     client
       .resizeWindow(1280, 800)
       .url('http://localhost:3000/signin')
       .waitForElementVisible('body', 1000)
       .setValue('input#username', 'abiliyok')
       .setValue('input#password', 'topper234')
       .click('button#login')
       .pause(1000)
       .click('a.btn')
       .setValue('input#name', 'Laravel-group')
       .setValue('textarea#description', 'laravel description')
       .click('button#create-group')
       .pause(1500)
       .assert.urlEquals('http://localhost:3000/dashboard')
       .assert.containsText('div.toast', 'Group successfully created')
       .assert.elementPresent('a.purple-text')
       .assert.containsText('a.purple-text', 'laravel-group')
       .pause(1000)
       .end();
   },
  'it should show throw an error if user enters a group name that already exist':
  (client) => {
    client
      .resizeWindow(1280, 800)
      .url('http://localhost:3000/signin')
      .waitForElementVisible('body', 1000)
      .setValue('input#username', 'abiliyok')
      .setValue('input#password', 'topper234')
      .click('button#login')
      .pause(1000)
      .click('a.btn')
      .setValue('input#name', 'Laravel-group')
      .setValue('textarea#description', 'laravel description')
      .click('button#create-group')
      .pause(1500)
      .assert.urlEquals('http://localhost:3000/dashboard')
      .assert.containsText('div.toast', 'Group name already exist')
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
      .assert.elementPresent('h4.not-found-header')
      .assert.elementPresent('p.not-found-body')
      .assert.containsText('h4.not-found-header', 'No messages in this group')
      .assert.containsText('p.not-found-body', 'Post a message now')
      .assert.elementPresent('input#message')
      .assert.elementPresent('select#priority')
      .setValue('input.browser-default', 'Hello laravel fellows')
      .pause(1000)
      .submitForm('#new-message-form')
      .pause(1000)
      .assert.elementPresent('p#message')
      .assert.containsText('div.toast', 'Message sent successfully')
      .assert.containsText('p#message', 'Hello laravel fellows')
      .assert.elementPresent('strong#user-name')
      .assert.elementPresent('span#message-date')
      .assert.containsText('input.browser-default', '')
      .pause(1000);
  },
  'it should show message if search result returns empty': (client) => {
    client
      .assert.elementPresent('div.collapsible-header')
      .click('div.collapsible-header')
      .assert.elementPresent('a.modal-trigger')
      .pause(1000)
      .click('a.modal-trigger')
      .assert.elementPresent('input#search')
      .assert.containsText('input#search', '')
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
  'it should successfully delete the group and redirect to dashboard':
   (client) => {
     client
       .click('i.dropdown-button')
       .pause(1500)
       .click('button#delete-group')
       .click('button.swal-button--confirm')
       .pause(2000)
       .assert.containsText('div.toast', 'Group successfully deleted')
       .assert.urlEquals('http://localhost:3000/dashboard')
       .assert.elementPresent('h4.not-found-header')
       .assert.elementPresent('p.not-found-body')
       .assert.containsText('h4.not-found-header', 'You have no groups')
       .assert.containsText('p.not-found-body', 'Please create a group')
       .pause(1000)
       .end();
   },
};
