var admin = require("firebase-admin");
const fs = require('fs')
const path = "firebase-credential.json"

const getAccount = () => {
  try {
    if (fs.existsSync(path)) {
      const cred = JSON.parse(fs.readFileSync(path))
      return cred
    } else {
      const cred = JSON.parse(process.env.FIREBASE)
      return cred
    }
  } catch(err) {
    const cred = JSON.parse(process.env.FIREBASE)
    return cred
  }
}

admin.initializeApp({
  credential: admin.credential.cert(getAccount()),
  databaseURL: "https://ghostwriter-f7e9d.firebaseio.com"
});

module.exports = admin