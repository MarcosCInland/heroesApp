import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styles: [
  ]
})
export class ConfirmActionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmActionComponent>,
              @Inject(MAT_DIALOG_DATA) public hero: Heroe) { }

  ngOnInit(): void {
  }

  borrar(): void {
    this.dialogRef.close(true);
  }

  cerrar(): void {
    this.dialogRef.close();
  }

}
