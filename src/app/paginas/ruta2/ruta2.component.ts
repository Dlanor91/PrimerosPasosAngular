import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta2',
  templateUrl: './ruta2.component.html',
  styleUrls: ['./ruta2.component.css']
})
export class Ruta2Component implements OnInit{
  id:string;
  slug:string;
  page:1;
  page2:2;
  constructor(private route:ActivatedRoute,private titleService: Title){}

  ngOnInit(): void {
    this.cambiarTitle("Curso Angular - Ruta 2");
      let params:any = this.route.snapshot.params;
      let queryParams:any = this.route.snapshot.queryParams;
      this.id = params.id;
      this.slug = params.slug;
      this.page = (queryParams.page)?queryParams.page:1;
      this.page2 = (queryParams.page)?queryParams.page2:2;

  }

  public cambiarTitle(titulo:string){
    this.titleService.setTitle(titulo);
  }
}
