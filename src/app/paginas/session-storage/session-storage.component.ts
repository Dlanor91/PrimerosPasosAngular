import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.css']
})
export class SessionStorageComponent implements OnInit{

  constructor(){};
  
  ngOnInit(): void {
    this.crear();
  }

  crear(){
    sessionStorage.setItem('variableSession','valorSession');
  }
}
