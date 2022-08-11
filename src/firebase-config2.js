import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


  const firebaseConfig2 = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY2,
    authDomain: "client-dashboard-myinsure.firebaseapp.com",
    projectId: "client-dashboard-myinsure",
    storageBucket: "client-dashboard-myinsure.appspot.com",
    messagingSenderId: "192959490114",
    appId: process.env.REACT_APP_FIREBASE_APPID2,
    measurementId: "G-02JZ5XTRDV"
  };
  
  // Initialize Firebase
    const app2 = initializeApp(firebaseConfig2, 'admin');
  // const analytics = getAnalytics(app);
  export const db2 = getFirestore(app2);

  export const auth2 = getAuth(app2);
  export const storage2 = getStorage(app2);

  export default app2;
//