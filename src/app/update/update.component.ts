import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service'
import { AuthService } from '../core/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { User } from '../core/user.model'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  user: User = new User()
  ProfileForm: FormGroup
  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) { this.creaForm() }

  ngOnInit(): void {
    this.route.data.subscribe(async routeData => {
      let data = routeData['data']
      if (data) {
        this.user = await this.userService.getUserProfile(data.uid)
      }
    })
  }
  creaForm() {
    this.ProfileForm = new FormGroup({
      displayName: new FormControl(),
      studentId: new FormControl()
    })
  }
  Save(value) {
    this.userService.updateCurrentUser(this.user, value)
    console.log(value);

  }
}
