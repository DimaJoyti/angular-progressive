import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { ContentComponent } from "./content/component/content/content.component";
import { ContentfulService } from "./content/service/contentful.service";
import { MdToHtmlPipe } from "./content/pipe/md-to-html.pipe";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ProductComponent, ContentComponent, LoginComponent],
  declarations: [ProductComponent, ContentComponent, LoginComponent, MdToHtmlPipe],
  providers: [ContentfulService]
})
export class PagesModule {}
