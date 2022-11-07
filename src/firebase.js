import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCwd1qo_fffer7ujdMRiwJEXW6lvi7xwYc",
    authDomain: "linkedin-cloene.firebaseapp.com",
    projectId: "linkedin-cloene",
    storageBucket: "linkedin-cloene.appspot.com",
    messagingSenderId: "934744579533",
    appId: "1:934744579533:web:d90b1e6085f907a1b3f884",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
