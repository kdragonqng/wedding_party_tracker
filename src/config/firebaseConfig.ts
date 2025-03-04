import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDyrHR_ltgFl2JBJ8YE4isj9x35iocOA6s",
    authDomain: "weddingpartytracker.firebaseapp.com",
    projectId: "weddingpartytracker",
    messagingSenderId: "245294411797",
    appId: "1:245294411797:android:e9904e121d0d6f78149e1c"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const firebaseAuth = auth();

export { app, firebaseAuth, firebaseConfig };