import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateaNumeros'
})
export class FormateaNumerosPipe implements PipeTransform {

  transform(value:number) {
    return "U" + new Intl.NumberFormat().format(value);
  }

}
