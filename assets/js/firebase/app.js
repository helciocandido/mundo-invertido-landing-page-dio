// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDgDLLBYlkKjSnvdbE-GlRQmxveQndX8Wo',
  authDomain: 'clube-dd-subs.firebaseapp.com',
  projectId: 'clube-dd-subs',
  storageBucket: 'clube-dd-subs.appspot.com',
  messagingSenderId: '583648914485',
  appId: '1:583648914485:web:05fae561ad619ce50d157c',
  measurementId: 'G-L4C2RQRT7E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
