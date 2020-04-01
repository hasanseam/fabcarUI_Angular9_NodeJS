import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  public results:any = [];
  constructor(private _queryService:QueryService) { }

  ngOnInit(): void {
    let obs = this._queryService.query()
    obs.subscribe((response)=> {
      this.results = response;
      console.log(this.results);
    });
  }

}
