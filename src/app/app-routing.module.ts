import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { ProductsComponent } from "./components/products/products.component";
import { ProductComponent } from "./components/product/product.component";
import { ContentComponent } from "./components/content/content.component";
import { SearchComponent } from "./components/search/search.component";
import { EditComponent } from "./components/search/edit/edit.component";
import { PeopleComponent } from "./components/people/people.component";
import { UploadComponent } from "./components/upload/upload.component";
import { ChartComponent } from "./charts/chart.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  {
    path: "products",
    component: ProductsComponent,
    data: { animation: "products" }
  },
  { path: "products/:id", component: ProductComponent },
  { path: "people", component: PeopleComponent, data: { animation: "people" } },
  {
    path: "login",
    loadChildren: "./auth/auth.module#AuthModule",
    data: { animation: "login" }
  },
  { path: "chart", component: ChartComponent },
  { path: "content", component: ContentComponent },
  { path: "search", component: SearchComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "upload", component: UploadComponent },
  { path: "**", component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
      // enableTracing: true,
      // preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
