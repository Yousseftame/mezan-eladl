import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6O8mnUNXn9Ok5b6BCDgt1pToHzRqHtzI",
  authDomain: "mezan-610a7.firebaseapp.com",
  projectId: "mezan-610a7",
  storageBucket: "mezan-610a7.firebasestorage.app",
  messagingSenderId: "241593667581",
  appId: "1:241593667581:web:b2636104b3b04df9115394",
  measurementId: "G-0FL3XYS07D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };
