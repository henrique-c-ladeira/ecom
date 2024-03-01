import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore/lite';

export class FirebaseDatabase {
  private static instance: FirebaseDatabase;

  private db: Firestore;

  private constructor(db: Firestore) {
    this.db = db;
  }

  public static getInstance() {
    if (!FirebaseDatabase.instance) {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      FirebaseDatabase.instance = new FirebaseDatabase(db);
    }

    return FirebaseDatabase.instance.db;
  }
}

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};
