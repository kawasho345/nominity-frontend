// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlfrXBkX8BhduNCGf-IC6Xi9Gms9zJ18M",
  authDomain: "nominity-image-uploader.firebaseapp.com",
  projectId: "nominity-image-uploader",
  storageBucket: "nominity-image-uploader.appspot.com",
  messagingSenderId: "433140609409",
  appId: "1:433140609409:web:b77a6bcaba7b79997ab880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;