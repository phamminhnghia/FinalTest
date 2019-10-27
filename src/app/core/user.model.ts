export class User {
  uid: string
  email: string
  photoURL?: string
  displayName?: string
  studentId?: string
  provider?: string

  constructor() {
    this.uid = ''
    this.email = ''
    this.photoURL = ''
    this.displayName = ''
    this.provider = ''
  }
}
