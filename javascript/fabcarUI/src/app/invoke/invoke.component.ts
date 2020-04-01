import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { NgForm } from '@angular/forms';
import { InvokeCarService } from '../invoke-car.service';

@Component({
  selector: 'app-invoke',
  templateUrl: './invoke.component.html',
  styleUrls: ['./invoke.component.css']
})
export class InvokeComponent implements OnInit {


  car = new Car('','','','');
  
  constructor(private _invokeCarService:InvokeCarService ){

  }

  ngOnInit(): void {
  }
  
  invokeFormSubmit(fabCarForm : NgForm){
      console.log(this.car);
      let obs= this._invokeCarService.invoke(this.car);
      obs.subscribe(
        data => console.log('success',data),
        error => console.log('Error',error)
      )
      fabCarForm.reset()
  }
}
