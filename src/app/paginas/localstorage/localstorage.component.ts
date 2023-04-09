import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {  
    this.crearLocal();  
  }

  crearLocal(){
    if(typeof(Storage) !== 'undefined'){
      localStorage.setItem("miVariable","123456");
    }else{
      console.log("no se puede");
    }
  }

}
