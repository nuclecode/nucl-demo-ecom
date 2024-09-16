// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARVYRGWfsqavKd6JQFB78tzLP7JinYz_I",
  authDomain: "nucl-demo-ecom.firebaseapp.com",
  databaseURL: "https://nucl-demo-ecom-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nucl-demo-ecom",
  storageBucket: "nucl-demo-ecom.appspot.com",
  messagingSenderId: "8289553010",
  appId: "1:8289553010:web:c9c50ebd6163a9408250eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);