import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise'
import { AngularFireAuth } from '@angular/fire/auth'
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore'
import * as firebase from 'firebase/app'
import { User } from './user.model'

@Injectable()
export class UserService {
  point;
  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) { }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          resolve(user)
        } else {
          reject('No user logged in')
        }
      })
    })
  }

  updateCurrentUser(user, value) {
    console.log('---- update', value)
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    )
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: value.displayName,
      photoURL: user.photoURL,
      studentId: value.studentId
    }
    return userRef.set(data, { merge: true })
  }

  getUserProfile(uid) {
    return this.afs
      .collection('users')
      .doc(uid)
      .ref.get()
      .then(user => {
        console.log('0--===', user)
        if (user.exists) {
          console.log('=--- user', user.data())
          return user.data()
        }
        return null
      })
      .catch(function (error) {
        console.log('Error getting document:', error)
        return null
      })
  }
}
