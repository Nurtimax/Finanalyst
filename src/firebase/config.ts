// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCkXlSEJsb--T5k5uFKmwHh_UYxI9Pwzhg',
  authDomain: 'planner-dcafb.firebaseapp.com',
  projectId: 'planner-dcafb',
  storageBucket: 'planner-dcafb.appspot.com',
  messagingSenderId: '986793854178',
  appId: '1:986793854178:web:a15071cc2cd02471370abb',
  measurementId: 'G-E3R6576BWG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
