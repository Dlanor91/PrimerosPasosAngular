import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-material-panel-expansion',
  templateUrl: './material-panel-expansion.component.html',
  styleUrls: ['./material-panel-expansion.component.css']
})
export class MaterialPanelExpansionComponent implements OnInit{

  @ViewChild(MatAccordion) accoordion: MatAccordion;

  ngOnInit(): void {
      
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
