import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAwFVzt3yGpWGzuxa0je2OwKO8Bqguj6zg",
    authDomain: "crwn-db-40d1a.firebaseapp.com",
    projectId: "crwn-db-40d1a",
    storageBucket: "crwn-db-40d1a.appspot.com",
    messagingSenderId: "804345574839",
    appId: "1:804345574839:web:80a83e3914f7c598772432",
    measurementId: "G-VNHLN0CN6E"
  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;
