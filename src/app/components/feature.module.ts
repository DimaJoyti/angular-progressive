import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { SearchComponent } from './search/search.component';
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
import { SearchService } from "./search/search.service";
import { EditComponent } from './search/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    PeopleComponent,
    LessonsComponent,
    PostsComponent,
    SearchComponent,
    EditComponent
  ],
  declarations: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    PeopleComponent,
    LessonsComponent,
    PostsComponent,
    MdToHtmlPipe,
    SearchComponent,
    EditComponent
  ],
  providers: [PeopleService, ProductService, PaymentService, SearchService]
})
export class FeatureModule {}
