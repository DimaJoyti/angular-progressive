import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from "ag-grid-angular/main";
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './components/grid.component';

@NgModule({
  imports: [
    GridRoutingModule,
    SharedModule,
    AgGridModule
  ],
  declarations: [
    GridComponent
  ]
})
export class GridModule { }
