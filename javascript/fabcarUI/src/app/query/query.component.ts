import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  public results:any = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get('http://'+location.hostname+':8080/api/query/');
    obs.subscribe((response)=> {
      this.results = response;
      console.log(this.results);
    });
  }

}
