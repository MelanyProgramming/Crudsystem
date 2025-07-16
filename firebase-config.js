
// Importa solo lo necesario de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de tu app de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB4ledaJizhSX6bWFaZq-lN2ti4n9ub2_k",
  authDomain: "fire-auth-system-87ea8.firebaseapp.com",
  projectId: "fire-auth-system-87ea8",
  storageBucket: "fire-auth-system-87ea8.appspot.com",
  messagingSenderId: "548770009774",
  appId: "1:548770009774:web:f5f20c657fbc770020133f"
};

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, firebaseApp };
