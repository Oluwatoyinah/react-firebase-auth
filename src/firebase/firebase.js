import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuTyLqpqjqbj8z03243qNG8En6nYhs2mE",
  authDomain: "oluwatoyinah-react-auth.firebaseapp.com",
  projectId: "oluwatoyinah-react-auth",
  storageBucket: "oluwatoyinah-react-auth.appspot.com",
  messagingSenderId: "849301421725",
  appId: "1:849301421725:web:561b9c0d6dd7cf62435e74",
  measurementId: "G-KK17VWSZC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };
