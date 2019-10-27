import { Component, OnInit } from '@angular/core'
import { UserService } from '../core/user.service'
import { AuthService } from '../core/auth.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { User } from '../core/user.model'

@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.scss']
})
export class UserComponent implements OnInit {
  user: User = new User()
  profileForm = new FormGroup({
    studentId: new FormControl()
  })

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(async routeData => {
      let data = routeData['data']
      if (data) {
        this.user = await this.userService.getUserProfile(data.uid)
      }
    })
  }

  createForm() {
    this.profileForm = new FormGroup({
      studentId: new FormControl()
    })
  }

  save(value) {
    this.userService.updateCurrentUser(this.user, value)
  }

  logout() {
    this.authService.doLogout().then(
      res => {
        this.location.back()
      },
      error => {
        console.log('Logout error', error)
      }
    )
  }
}
