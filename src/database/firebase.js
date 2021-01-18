import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD0D-rSAxSQkzrFmQcnakYtO3OozqURnGg",
  authDomain: "nurses-infostretch-app.firebaseapp.com",
  projectId: "nurses-infostretch-app",
  storageBucket: "nurses-infostretch-app.appspot.com",
  messagingSenderId: "45137606493",
  appId: "1:45137606493:web:9613ed9411a0c57845dab4",
});

const auth = app.auth();
const firestore = app.firestore();

export { auth, firestore };
