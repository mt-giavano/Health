import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  users : any;
  title : string;

  constructor(private http:HttpClient) { }


  ngOnInit() {
    this.title = "List of Patients";

    let resp = this.http.get("https://localhost:5001/api/patients");
    resp.subscribe((data) => this.users=data);
  }

}
