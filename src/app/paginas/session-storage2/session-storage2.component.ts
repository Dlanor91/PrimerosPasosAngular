import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-session-storage2',
  templateUrl: './session-storage2.component.html',
  styleUrls: ['./session-storage2.component.css']
})
export class SessionStorage2Component implements OnInit{
  variableSessionAdq:any;

  constructor(private route:Router){ }

  ngOnInit(): void {
    if(sessionStorage.getItem('variableSession')!=null){
      this.variableSessionAdq = sessionStorage.getItem('variableSessionAdq');
    }else{
      this.route.navigate(['/']);
    }
  }

  borrar(){
    //sessionStorage.clear()//elimino Todo
    sessionStorage.removeItem('variableSession');
    Swal.fire({
      icon:'success',
      title:'OK',
      text:'Se borro la session'
    }
      
    )
    this.route.navigate(['/']);
  }

}
