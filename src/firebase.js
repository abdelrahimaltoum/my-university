// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOgra9DsIiUikLwg5BS2ivCnW2pnwqTV0",
  authDomain: "my-university2.firebaseapp.com",
  projectId: "my-university2",
  storageBucket: "my-university2.appspot.com",
  messagingSenderId: "933764046888",
  appId: "1:933764046888:web:a1f7df8e9209e4ff32551d",
  measurementId: "G-SZNJWJ13CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);