import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="Alejo";
  completeName ="Alejandro Jimenez Mateus";
  array=[1,2,3,4,5,6,7,8,9,10];
  PI= Math.PI;
  a=0.1234;
  salary=1234.5;
  heroe={
    name:"Logan",
    key:"Wolveraine",
    years:500,
    address:{
      street:"First",
      home:"19-Nineteen"
    }
  }
  promise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Get Data!");
    }, 1500);
  });
  date= new Date();
  video ="3VmoZrxXbmg";
}
