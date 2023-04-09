import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit{

  constructor(private cookieService: CookieService){}

  ngOnInit(): void {
    this.crear();
  }

  crear(){
    this.cookieService.set('cookieVariable','valorCookie',1)
  }

}
