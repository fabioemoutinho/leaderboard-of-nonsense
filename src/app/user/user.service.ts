import { Injectable } from '@angular/core';
import { User as FirebaseUser } from '@angular/fire/auth';
import {
  collection,
  doc,
  docData,
  DocumentReference,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { mergeMap, take } from 'rxjs';

import { LoginService } from '../login/login.service';

export interface User {
  id: string;
  description: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userCollection = collection(this.firestore, 'user');

  constructor(
    private firestore: Firestore,
    private loginService: LoginService
  ) {}

  getUser(id?: string) {
    if (id) {
      const docRef = doc(
        this.firestore,
        `user/${id}`
      ) as DocumentReference<User>;
      return docData<User>(docRef, { idField: 'id' });
    }
    return this.loginService.user$.pipe(
      take(1),
      mergeMap((user: FirebaseUser | null) => {
        const docRef = doc(
          this.firestore,
          `user/${user?.uid}`
        ) as DocumentReference<User>;
        return docData<User>(docRef, { idField: 'id' });
      })
    );
  }

  updateUser(user: User) {
    const docRef = doc(
      this.firestore,
      `user/${user?.id}`
    ) as DocumentReference<User>;
    return updateDoc<User>(docRef, user);
  }

  addUser(id: string) {
    setDoc(doc(this.userCollection, id), { idField: id });
  }
}
