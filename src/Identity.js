var utils = require('./utils');

function sanitizeUser(u) {
  var sane = utils.clone(u);
  if (sane.key) {
    sane.key = sane.key.toString();
  }
  return sane;
}

function Identity(initialUser, onChange) {
  var ident = {};
  var user;
  
  ident.setUser = function(u) {
    user = sanitizeUser(u);
    onChange(utils.clone(user));
  };
  
  ident.getUser = function() {
    return utils.clone(user);
  };
  
  if (initialUser) {
    ident.setUser(initialUser);
  }
  
  return ident;
}

module.exports = Identity;
