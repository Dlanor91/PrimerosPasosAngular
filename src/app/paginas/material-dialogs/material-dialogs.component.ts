import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-material-dialogs',
  templateUrl: './material-dialogs.component.html',
  styleUrls: ['./material-dialogs.component.css']
})
export class MaterialDialogsComponent {
  constructor(public dialog:MatDialog){

  }

  abrir(enterAnimationDuration:string, exitAnimationDuration:string){
    this.dialog.open(DialogAnimationsExampleDialog,{
      width:'250px',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
