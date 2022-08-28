import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCjlRYdPRwDuM8H9LbAdMisB1UerlOwbOs",
  authDomain: "high-vr-company.firebaseapp.com",
  projectId: "high-vr-company",
  storageBucket: "high-vr-company.appspot.com",
  messagingSenderId: "675996441632",
  appId: "1:675996441632:web:f772594d4a4f42383c3045",
  measurementId: "G-BJ768C0N37"
};

const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);