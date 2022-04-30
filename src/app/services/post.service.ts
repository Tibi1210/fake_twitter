import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { PostDB } from '../models/PostDB';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  collectionName = 'Posts';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}

  create(post: PostDB) {
    return this.afs
      .collection<PostDB>(this.collectionName).add(post);
  }

  getUser() {
    return this.afs
      .collection<PostDB>(this.collectionName)
      .valueChanges();
  }

  update() {}
  delete() {}
}
