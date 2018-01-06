import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { ContentComponent } from "./content/content.component";
import { ContentfulService } from "./content/contentful.service";
import { ProductComponent } from "./product/product.component";
import { ProductService } from "./product/product.service";
import { PeopleComponent } from "./people/people.component";
import { PeopleService } from "./people/people.service";
import { LessonsComponent } from "./lessons/lessons.component";
import { MdToHtmlPipe } from "./content/md-to-html.pipe";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    PeopleComponent,
    LessonsComponent
  ],
  declarations: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    PeopleComponent,
    LessonsComponent,
    MdToHtmlPipe
  ],
  providers: [ProductService, PeopleService]
})
export class FeatureModule {}
