import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie2',
  templateUrl: './cookie2.component.html',
  styleUrls: ['./cookie2.component.css']
})

export class Cookie2Component implements OnInit{

  cookieAdq:any;

  constructor(private cookieService: CookieService, private route:Router){}

  ngOnInit(): void {
    if(this.cookieService.check('cookieVariable')){
      this.cookieAdq = this.cookieService.get('variable');
    }else{
      this.route.navigate(['/']);
    }
  }

  borrar(){
    //this.cookieService.deleteAll()//borra todas
    this.cookieService.delete('cookieVariable');

    this.route.navigate(['/']);
  }

}
