import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

export default app;

export class FirebaseConfig {
  private static instance: FirebaseConfig | null = null;
  private fbApp: any = null;
  fbDB: any = null;
  auth: any = null;

  constructor() {
    this.fbApp = initializeApp(firebaseConfig);
    this.fbDB = getFirestore(this.fbApp);
    this.auth = getAuth(this.fbApp);
  }

  static getInstance() {
    if (this.instance == null) {
      this.instance = new FirebaseConfig();
    }
    return this.instance;
  }
}
