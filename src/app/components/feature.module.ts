import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { SearchComponent } from "./search/search.component";
import { ContentComponent } from "./content/content.component";
import { ContentfulService } from "./content/contentful.service";
import { ProductComponent } from "./product/product.component";
import { PeopleComponent } from "./people/people.component";
import { LessonsComponent } from "./lessons/lessons.component";
import { PostsComponent } from "./posts/posts.component";
import { MdToHtmlPipe } from "./content/md-to-html.pipe";
import { PaymentComponent } from "./payment/payment.component";
import { CompanyComponent } from "./company/company.component";
import { EditComponent } from "./search/edit/edit.component";

import { PeopleService } from "./people/people.service";
import { ProductService } from "./product/product.service";
import { PaymentService } from "./payment/peyment.service";
import { SearchService } from "./search/search.service";
import { ProductsComponent } from "./products/products.component";
import { UploadComponent } from "./upload/upload.component";
import { DropZoneDirective } from "./upload/drop-zone.directive";
import { FileSizePipe } from "./upload/file-size.pipe";

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [
    ProductsComponent,
    ProductComponent,
    ContentComponent,
    PeopleComponent,
    LessonsComponent,
    PostsComponent,
    MdToHtmlPipe,
    PaymentComponent,
    CompanyComponent,
    SearchComponent,
    EditComponent,
    UploadComponent,
    DropZoneDirective,
    FileSizePipe
  ],
  providers: [PeopleService, ProductService, PaymentService, SearchService]
})
export class FeatureModule {}
