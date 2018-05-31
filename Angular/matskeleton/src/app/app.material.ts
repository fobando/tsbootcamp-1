 import { NgModule } from '@angular/core';
 import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
   MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const mariosMaterialModules = [
  MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule,
  MatToolbarModule, MatInputModule
];
 @NgModule({
  imports: [...mariosMaterialModules],
  exports: [...mariosMaterialModules]
})
export class MaterialModule { }
