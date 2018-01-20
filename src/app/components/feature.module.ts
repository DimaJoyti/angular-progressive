import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { ContentComponent } from "./content/content.component";
import { ContentfulService } from "./content/contentful.service";
import { ProductComponent } from "./product/product.component";
import { PeopleComponent } from "./people/people.component";
import { LessonsComponent } from "./lessons/lessons.component";
import { PostsComponent } from "./posts/posts.component";
import { MdToHtmlPipe } from "./content/md-to-html.pipe";

import { PeopleService } from "./people/people.service";
import { ProductService } from "./product/product.service";
import { PaymentService } from "./payment/peyment.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    PeopleComponent,
    LessonsComponent,
    PostsComponent
  ],
  declarations: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    PeopleComponent,
    LessonsComponent,
    PostsComponent,
    MdToHtmlPipe
  ],
  providers: [PeopleService, ProductService, PaymentService]
})
export class FeatureModule {}
