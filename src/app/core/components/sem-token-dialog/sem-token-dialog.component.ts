import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sem-token-dialog',
  templateUrl: './sem-token-dialog.component.html',
  styleUrls: ['./sem-token-dialog.component.css']
})
export class SemTokenDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SemTokenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
