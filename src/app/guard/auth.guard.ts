import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(private CookieService: CookieService, private router: Router){    

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.CookieService.check('var_login')){
      return true;
    }
    else{
      swal.fire({
        icon: 'error',
        title:'Ops...',
        text:"Debes loguearte para acceder a este contenido"
      });
      return this.router.navigate(['/login']).then(()=> false);
    }
    
  }
  
}
