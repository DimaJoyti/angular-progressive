import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductComponent }
    ]),
    SharedModule
  ],
  declarations: [],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
