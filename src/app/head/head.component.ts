import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service'
import { AuthService } from '../core/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'
import { User } from '../core/user.model'
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  user: User = new User()
  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(async routeData => {
      let data = routeData['data']
      if (data) {
        this.user = await this.userService.getUserProfile(data.uid)
      }
    })
   
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
