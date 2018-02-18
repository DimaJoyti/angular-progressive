import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }
    ]),
    SharedModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarsComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
