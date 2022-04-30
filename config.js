import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAKSHWEuUWTeWjt-lW5imzMcS-GUs8_f6k",
    authDomain: "class71project-4966e.firebaseapp.com",
    projectId: "class71project-4966e",
    storageBucket: "class71project-4966e.appspot.com",
    messagingSenderId: "232706495913",
    appId: "1:232706495913:web:c17a967be909330ebaa0b8"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
