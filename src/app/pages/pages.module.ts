import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ProductComponent, LoginComponent],
  declarations: [ProductComponent, LoginComponent]
})
export class PagesModule {}
