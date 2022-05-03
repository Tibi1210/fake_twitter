import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { stringify } from 'querystring';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  collectionName = 'Users';

  constructor(private afs: AngularFirestore) {}

  create(user: User) {
    return this.afs
      .collection<User>(this.collectionName)
      .doc(user.id)
      .set(user);
  }

  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }

  //1. Komplex lekérdezés
  getOne(username: string) {
    return this.afs
      .collection<User>(this.collectionName, (ref) =>
        ref.where('id', '==', username).limit(1)
      )
      .valueChanges();
  }
  update(user: User) {
    return this.afs
      .collection<User>(this.collectionName)
      .doc(user.id)
      .set(user);
  }
}
