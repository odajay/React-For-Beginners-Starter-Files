import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA7IlnmfgqkOmlP0JbtpJtnMIqMIE84QPw",
    authDomain: "catch-of-the-day-jonatha-4032d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jonatha-4032d.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export;
export default base;
