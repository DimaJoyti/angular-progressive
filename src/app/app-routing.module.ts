import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { ContentComponent } from "./components/content/content.component";
import { SearchComponent } from "./components/search/search.component";
import { EditComponent } from "./components/search/edit/edit.component";
import { PeopleComponent } from "./components/people/people.component";
import { UploadComponent } from "./components/upload/upload.component";
import { ChartComponent } from "./charts/chart.component";
import { PizzaOrderComponent } from "./components/pizza/pizza-order/pizza-order.component";
import { ProductListComponent } from "./components/products/product-list/product-list.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "people", component: PeopleComponent, data: { animation: "people" } },
  { path: "pizza", component: PizzaOrderComponent, data: { animation: "people" } },
  { path: "login", loadChildren: "./auth/auth.module#AuthModule", data: { animation: "login" }},
  { path: "items", loadChildren: "./components/items/items.module#ItemsModule", data: { animation: "items" }},
  { path: "chart", component: ChartComponent },
  { path: "content", component: ContentComponent },
  { path: "search", component: SearchComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "upload", component: UploadComponent },
  //{ path: "**", component: ProductListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true
      // enableTracing: true,
      // preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
