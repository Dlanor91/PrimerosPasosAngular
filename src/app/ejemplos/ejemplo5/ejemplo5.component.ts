import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css']
})
export class Ejemplo5Component {
  fecha = new Date();
  cantidad:number = 123456;
  texto:string = "La presencia de los vampiros en la literatura abarca un campo literario" +
                 "centrado en torno a la figura del vampiro y los elementos asociados a la misma,"+
                 " con diversas variantes. Aunque figuras y personajes vampíricos con diversos rasgos han"+
                 " aparecido en la mitología, la cultura oral y la literatura desde la antigüedad la primera aparición del vampiro literario moderno se produjo en las baladas góticas del siglo XVIII, saltando al ámbito de la novela con The Vampyre de Polidori (1819) y posteriormente se popularizaría como figura de los relatos de terror. La historia de Carmilla (1872) de Sheridan Le Fanu resultó muy influyente en el género, así como para perfilar la imagen del vampiro gótico, pero sin duda la obra maestra y completa del género es Drácula de Bram Stoker (1897). Desde el siglo XX las historias de vampiros se han diversificado, no solo aportando elementos nuevos, sino también introduciendo elementos de otros géneros como las novelas de suspenso, fantasía, ciencia ficción y otros géneros menos habituales. Además de las tradicionales criaturas no muertas bebedoras de sangre, el vampirismo se ha extendido a otro tipo de seres como alienígenas o incluso animales. Otros “vampiros” de ficción se alimentan de energía vital en lugar de sangre.";
}
