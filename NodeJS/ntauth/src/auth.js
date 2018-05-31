var ActiveDirectory = require('activedirectory');

var config = { url: 'ldap://127.0.0.1',
               baseDN: 'dc=testfbe,dc=com',
               username: 'ibusr@testfbe.com',
	             password: 'P@ss54321'
              }
 
var ad = new ActiveDirectory(config);

 
var username = 'ibtst2@testfbe.com';
var password = 'P@ss54321';


ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
  
  if (auth) {
    console.log('Authenticated!',auth);
  }
  else {
    console.log('Authentication failed!');
  }
});


var groupName = 'BBANKOFFICE';
 
ad.isUserMemberOf(username, groupName, function(err, isMember) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }
 
  console.log(username + ' isMemberOf ' + groupName + ': ' + isMember);
});


ad.findUser(username, function(err, user) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }
 
  if (! user) console.log('User: ' + sAMAccountName + ' not found.');
  else console.log(JSON.stringify(user));
});
