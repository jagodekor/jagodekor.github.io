// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjTFaE6gAXkMefZHHmqq740wegTO3RzWE",
  authDomain: "jagodekorblog.firebaseapp.com",
  databaseURL: "https://jagodekorblog-default-rtdb.firebaseio.com",
  projectId: "jagodekorblog",
  storageBucket: "jagodekorblog.firebasestorage.app",
  messagingSenderId: "216723015727",
  appId: "1:216723015727:web:18bc068bdb14bcb0791eda",
  measurementId: "G-DW1B09LVYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
