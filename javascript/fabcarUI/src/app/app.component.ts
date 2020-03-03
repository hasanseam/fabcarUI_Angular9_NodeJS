import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabcarUI';
  public results:any = [];
  constructor(private http:HttpClient)
  {
    
  }
  ngOnInit(){
    let obs = this.http.get('http://'+location.hostname+':8080/api/query/');
    obs.subscribe((response)=> {
      this.results = response;
      console.log(this.results);
    });
  }
}
