import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DynamicComponent } from "./forms/dynamic/dynamic.component";
import { FormlyComponent } from './forms/formly/formly.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  exports: [HeaderComponent, FooterComponent, DynamicComponent, FormlyComponent],
  declarations: [HeaderComponent, FooterComponent, DynamicComponent, FormlyComponent]
})
export class LayoutModule {}
