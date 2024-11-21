import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGDvsbvrCyNDBiwL5sdDlypmOozyRL8Ho",
  authDomain: "phdtracker-4c028.firebaseapp.com",
  projectId: "phdtracker-4c028",
  storageBucket: "phdtracker-4c028.firebasestorage.app",
  messagingSenderId: "887481722405",
  appId: "1:887481722405:web:f79191988b5d4a2e7441cc",
  measurementId: "G-BSXGQK6YKX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);