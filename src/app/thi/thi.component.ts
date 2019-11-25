import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-thi',
  templateUrl: './thi.component.html',
  styleUrls: ['./thi.component.scss']
})
export class ThiComponent implements OnInit {
  p = 1;
  url = '';
  lists: any;
  h = 0;
  m = 59;
  s = 59;
  answers = [];
  timeout = null;
  isEdit;
  subjectName
  result = {
    mark: 0
  }
  mark =0
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
  ngOnInit() {
    this.isEdit = true

    this.route.paramMap.subscribe(params => {
      const id = params.get('Id')
      this.subjectName = id
      console.log(id);
    })
    this.GetData(this.subjectName).subscribe(data => {
      // id = data'
      this.lists = data
      console.log('-----------', this.lists);

    })
  }

  GetData = (Id) => {
    return this.http.get(`../../assets/db/Quizs/${Id}.json`);
  }

  start() {
    if (this.s === -1) {
      this.m -= 1;
      this.s = 59;
    }
    if (this.m === -1) {
      this.h -= 1;
      this.m = 59;
    }
    if (this.h == -1) {
      clearTimeout(this.timeout);
      alert('Hết giờ');
      return false;
    }
    document.getElementById('h').innerText = this.h.toString();
    document.getElementById('m').innerText = this.m.toString();
    document.getElementById('s').innerText = this.s.toString();
    this.timeout = setTimeout(() => {
      this.s--;
      this.start();
    }, 1000);
    this.isEdit = false



  }
  stop() {
    clearTimeout(this.timeout);

    this.isEdit = true
    let mark = 0;
    for (let i = 0; i < this.lists.length; ++i) {
      if (this.lists[i].AnswerId == this.answers[i]) {
        mark += this.lists[i].Marks
      }
    }
    console.log(mark)
  }
  submit() {
    for (let i = 0; i < this.lists.length; ++i) {
      if (this.lists[i].AnswerId == this.answers[i]) {
        this.mark += this.lists[i].Marks
      }
    }
    console.log(this.mark)
  }

}







