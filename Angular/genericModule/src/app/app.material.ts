 import { NgModule } from '@angular/core';
 import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatMenuModule, MatDialogModule, MatSnackBarModule, MatTableModule,
   MatIconModule, MatFormFieldModule, MatInputModule,
   MatPaginatorModule } from '@angular/material';

const MaterialModules = [
  MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatTableModule,
  MatToolbarModule, MatInputModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
  MatPaginatorModule
];

 @NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules]
})
export class MaterialModule { }
