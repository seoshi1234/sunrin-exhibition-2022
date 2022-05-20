// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage,ref, listAll } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvI3mDUt0rpeP_Mei6tGQ5U79f45Jmj20",
  authDomain: "sunrin-exhibition-2022.firebaseapp.com",
  projectId: "sunrin-exhibition-2022",
  storageBucket: "sunrin-exhibition-2022.appspot.com",
  messagingSenderId: "24502545684",
  appId: "1:24502545684:web:4b23eb2263e80a5bcd2601",
  measurementId: "G-C13DN5VJNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {app,storage,ref,listAll};