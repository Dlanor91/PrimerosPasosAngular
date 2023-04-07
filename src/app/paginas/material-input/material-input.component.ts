import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit{

  numero1:number;
  numero2:number;
  opcion1 = true;
  opcion2 = false;
  opcion3 = false;
  opcion4 = false;  
  resultado:any;

  constructor(){}

  ngOnInit(): void {
      
  }

  calcular(){
    this.resultado='';
    if(this.opcion1){
      let result = this.numero1 + this.numero2;
      this.resultado +=`La suma es ${result}. `;
    }
    if(this.opcion2){
      let result = this.numero1 - this.numero2;
      this.resultado +=`La resta es ${result}. `;
    }
    if(this.opcion3){
      let result = this.numero1 * this.numero2;
      this.resultado +=`El producto es ${result}. `;
    }
    if(this.opcion4){
      if(this.numero1===0)
      {
        this.resultado +="No se puede dividir entre 0. "}
      else{
        let result = this.numero1 / this.numero2;
        this.resultado +=`La division es ${result}. `;
      }
    }
  }
}
