import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-create-service',
  templateUrl: './modal-create-service.component.html',
  styleUrls: ['./modal-create-service.component.css']
})
export class ModalCreateServiceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalCreateServiceComponent>) {}

  closeModal(): void {
    this.dialogRef.close(); 
  }

  confirm(): void {
    this.dialogRef.close('confirmed'); 
  }

  ngOnInit(): void {
  }

}
