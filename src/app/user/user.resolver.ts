import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router'
import { UserService } from '../core/user.service'
import { User } from '../core/user.model'

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(public userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<User> {
    let user = new User()

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser().then(
        res => {
          console.log('user resolve', res)

          if (res.providerData[0].providerId == 'password') {
            user.photoURL = 'https://via.placeholder.com/400x300'
            user.displayName = res.displayName
            user.provider = res.providerData[0].providerId
            user.uid = res.uid
            user.email = res.email
            return resolve(user)
          } else {
            user.photoURL = res.photoURL
            user.displayName = res.displayName
            user.provider = res.providerData[0].providerId
            user.uid = res.uid
            user.email = res.email
            return resolve(user)
          }
        },
        err => {
          this.router.navigate(['/login'])
          return reject(err)
        }
      )
    })
  }
}
