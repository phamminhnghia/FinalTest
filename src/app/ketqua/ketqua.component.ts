import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service'

@Component({
  selector: 'app-ketqua',
  templateUrl: './ketqua.component.html',
  styleUrls: ['./ketqua.component.scss']
})
export class KetquaComponent implements OnInit {
  point;
  constructor(private User: UserService) { }

  ngOnInit() {
    this.point = this.User.point
  }

}
