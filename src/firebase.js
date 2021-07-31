import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSJmq-5dIDvXFLYyC-J7lTLcAFDp3ugEU",
    authDomain: "netflix-cloned-app.firebaseapp.com",
    projectId: "netflix-cloned-app",
    storageBucket: "netflix-cloned-app.appspot.com",
    messagingSenderId: "791646916778",
    appId: "1:791646916778:web:ffa550fe288a670459c0d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;