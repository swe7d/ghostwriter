var admin = require("firebase-admin");

var serviceAccount = require("./../firebase-credential.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ghostwriter-f7e9d.firebaseio.com"
});

module.exports = admin