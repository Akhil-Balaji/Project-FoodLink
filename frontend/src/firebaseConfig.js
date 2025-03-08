const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// ✅ Check if Firebase has already been initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth};
