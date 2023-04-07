import { Component,TemplateRef,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @ViewChild("myModalConf",{static: false}) myModalConf: TemplateRef<any>;

  constructor(private modalService: NgbModal){

  }

  abrir(){
    this.modalService.open(this.myModalConf,{size:'lg'});
  }
}
