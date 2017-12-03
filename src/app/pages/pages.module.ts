import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule],
  exports: [ProductComponent, LoginComponent],
  declarations: [ProductComponent, LoginComponent]
})
export class PagesModule {}
