import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DynamicComponent } from "./forms/dynamic/dynamic.component";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent, DynamicComponent],
  declarations: [HeaderComponent, FooterComponent, DynamicComponent]
})
export class LayoutModule {}
