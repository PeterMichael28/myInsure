import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "myinsure-9b6d0.firebaseapp.com",
    projectId: "myinsure-9b6d0",
    storageBucket: "myinsure-9b6d0.appspot.com",
    messagingSenderId: "151346107333",
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: "G-HD5M5X82C7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  export const db = getFirestore(app)

  export const auth = getAuth(app);
  export const storage = getStorage(app);

  // const auth = getAuth();



  export default app;

