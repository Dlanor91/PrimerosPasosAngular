import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit{
  boleano : boolean;
  constructor(private cookieService:CookieService){
  }

  ngOnInit(): void {
    if(this.cookieService.check('var_login')){
      this.boleano = true;
    }else{
      this.boleano = false;
    }
  }
}
