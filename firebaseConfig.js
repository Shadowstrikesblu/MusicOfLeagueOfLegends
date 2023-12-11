import { initializeApp } from 'firebase/app';
import {getAuth,initializeAuth,getReactNativePersistence, ReactNativeAsyncStorage} from 'firebase/auth';
import {  } from 'firebase/auth';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC_U9Pw29IU04ith4I69ssMmkka-DNp8eY',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'leagueoflegendsmusic-86b56',
  storageBucket: 'leagueoflegendsmusic-86b56.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:26591479522:android:8796fc17373ec36770c0bb',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
