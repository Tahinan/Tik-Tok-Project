import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD697F5TPKGl6LGXaq0A1mC6Kv9zUX14cs",
  authDomain: "tiktok-jornada-b75f7.firebaseapp.com",
  projectId: "tiktok-jornada-b75f7",
  storageBucket: "tiktok-jornada-b75f7.appspot.com",
  messagingSenderId: "1079514691447",
  appId: "1:1079514691447:web:86bf963c30effee7421372"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;