import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-danhmucmonhoc',
  templateUrl: './danhmucmonhoc.component.html',
  styleUrls: ['./danhmucmonhoc.component.scss']
})
export class DanhmucmonhocComponent implements OnInit {
  lists: any;
  p: number = 1;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetData().subscribe(data => {
      this.lists = data
      console.log(this.lists)
    })
  }
  GetData() {
    return this.http.get('../../assets/db/Subjects.json')
  }
  Up() {
    this.p++;
   
  }
  down(){
    this.p--;
    if(this.p=1){
      return this.p;

    }
    

    

    
  }
}
