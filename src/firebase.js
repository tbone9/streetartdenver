import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
// This is all the configuration information for Firebase

import '@firebase/firestore';
import 'firebase/analytics';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

const storage = firebase.storage();
const storageRef = storage.ref();
const analytics = firebase.analytics();

export {
    storage, storageRef, analytics, firebase as default
};