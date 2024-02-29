
const admin = require('firebase-admin');
var serviceAccount = require("../ketero-72e14-79dbd1c309b9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://ketero-72e14.appspot.com/'
});


module.exports = admin;