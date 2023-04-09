import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localstorage2',
  templateUrl: './localstorage2.component.html',
  styleUrls: ['./localstorage2.component.css']
})

export class Localstorage2Component implements OnInit {
  public variableLocal:any;
  
  constructor(private router:Router){};

  ngOnInit(): void {
    if(localStorage.getItem('miVariable')!=null){
      this.variableLocal = localStorage.getItem('miVariable');
    }
    else{
      this.router.navigate(['/']);
    }
  }
  
  evento(){
    //localStorage.clear() //limpia todas las variables

    localStorage.removeItem('miVariable');//limpia una variable
    this.router.navigate(['/']);
  }
}
