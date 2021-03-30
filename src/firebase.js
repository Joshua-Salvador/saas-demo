import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-functions";
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STOARGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = firebase.initializeApp(config);

export const db = app.firestore();
export const auth = app.auth();

// eslint-disable-next-line no-restricted-globals
console.log(location);
// eslint-disable-next-line no-restricted-globals
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
  auth.useEmulator("http://localhost:9099");
  firebase.functions().useEmulator("localhost", 5001);
}

export default app;
