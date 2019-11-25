import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {

  loginform: FormGroup
  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm()
  }

  ngOnInit() {


  }
  createForm() {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  tryLogin(value) {
    this.authService.doLogin(value).then(
      res => {
        console.log('dung');
        this.router.navigate(['/dm'])
      }, err => {
        console.log(err, value);
        document.getElementById('result').innerHTML = "tài khoản hoặc mật khẩu không chính xác"

      }
    )
  }
  tryGoogleLogin() {
    this.authService.doGoogleLogin().then(res => {
      this.router.navigate(['/dm'])
    })
  }
}
