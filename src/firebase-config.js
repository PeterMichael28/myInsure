import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBZBAim7m4t9hWqAYE965eiziLr9Uo1PsA",
    authDomain: "myinsure-9b6d0.firebaseapp.com",
    projectId: "myinsure-9b6d0",
    storageBucket: "myinsure-9b6d0.appspot.com",
    messagingSenderId: "151346107333",
    appId: "1:151346107333:web:6fd5e11cc21233bcb7b1ac",
    measurementId: "G-HD5M5X82C7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const auth = getAuth(app);

  export default app;

