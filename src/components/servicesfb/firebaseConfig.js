import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGLtddU7IjH4sSKk-XpLOUr_fssPpxKyY",
  authDomain: "electromax-dd35a.firebaseapp.com",
  projectId: "electromax-dd35a",
  storageBucket: "electromax-dd35a.appspot.com",
  messagingSenderId: "366497987740",
  appId: "1:366497987740:web:4594058f75cbd18d034159"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
