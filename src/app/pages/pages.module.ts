import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { ProductService } from "./product/product.service";
import { ContentComponent } from "./content/content.component";
import { ContentfulService } from "./content/contentful.service";
import { MdToHtmlPipe } from "./content/md-to-html.pipe";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ProductComponent, ContentComponent, LoginComponent],
  declarations: [ProductComponent, ContentComponent, LoginComponent, MdToHtmlPipe],
  providers: [ProductService, ContentfulService]
})
export class PagesModule {}
