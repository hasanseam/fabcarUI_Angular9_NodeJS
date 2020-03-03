import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabcarUI';
  constructor(private http:HttpClient)
  {
      
  }
  ngOnInit(){
    let obs = this.http.get('http://localhost:8080/api/query/');
    obs.subscribe(()=> console.log('got the response'));
  }
}
