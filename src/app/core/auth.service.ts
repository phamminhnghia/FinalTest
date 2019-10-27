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
export class AuthService {
  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {}

  async doGoogleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    const credential = await this.afAuth.auth.signInWithPopup(provider)
    return this.updateUserData(credential.user)
  }

  async doLogin(value) {
    const credential = await firebase
      .auth()
      .signInWithEmailAndPassword(value.email, value.password)
    return this.updateUserData(credential.user)
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut()
        resolve()
      } else {
        reject()
      }
    })
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    )
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data, { merge: true })
  }
}
