import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ref } from '@angular/fire/storage';
import { PostDB } from '../models/PostDB';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  collectionName = 'Posts';

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  create(post: PostDB) {
    return this.afs
      .collection<PostDB>(this.collectionName)
      .doc(post.id)
      .set(post);
  }

  getAll() {
    return this.afs.collection<PostDB>(this.collectionName).valueChanges();
  }

  //2. Komplex lekérdezés
  getSomeones(name: string) {
    return this.afs
      .collection<PostDB>(this.collectionName, (ref) =>
        ref.where('username', '==', name)
      )
      .valueChanges();
  }

  delete(id: string) {
    return this.afs.collection<PostDB>(this.collectionName).doc(id).delete();
  }
}
