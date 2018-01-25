import { NgModule } from "@angular/core";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DynamicComponent } from "./forms/dynamic/dynamic.component";
import { FormlyComponent } from "./forms/formly/formly.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DynamicComponent,
    FormlyComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    DynamicComponent,
    FormlyComponent
  ]
})
export class LayoutModule {}
