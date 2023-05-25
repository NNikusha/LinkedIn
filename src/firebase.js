import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApoF52s2nuUqCu9a6GwHZTAzz4G_RiGPo",
  authDomain: "linkendin-clone-yt.firebaseapp.com",
  projectId: "linkendin-clone-yt",
  storageBucket: "linkendin-clone-yt.appspot.com",
  messagingSenderId: "493654389460",
  appId: "1:493654389460:web:f4df8b06b3bcec6b890141",
  measurementId: "G-8PY78GK10P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
