import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart.component';


@NgModule({
  imports: [
    SharedModule,
    ChartsModule
  ],
  declarations: [ChartComponent]
})
export class ChartModule { }
