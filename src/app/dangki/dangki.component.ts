import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.scss']
})
export class DangkiComponent implements OnInit {
  signupform: FormGroup
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { this.createForm() }

  ngOnInit(

  ) {
  }
  createForm() {
    this.signupform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators]
    })
  }
  trySignup(value) {
    this.authService.doRegister(value)
    .then(res =>{
      console.log("success");
      
    }),err =>{
      console.log("Error");
      
    }
  }
}
