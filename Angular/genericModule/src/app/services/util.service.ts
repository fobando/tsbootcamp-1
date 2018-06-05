import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class UtilService {

  constructor(private dialog: MatDialog) { }


  confirmationDialog(title: string): Promise<boolean> {

    return new Promise((succ) => {

        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
           data: { title : title }
        });

        dialogRef.afterClosed().subscribe(result => {
           succ(result); // true or false
        });

    });
  }

}
