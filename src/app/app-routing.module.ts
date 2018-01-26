import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ProductComponent } from "./components/product/product.component";
import { ContentComponent } from "./components/content/content.component";
import { LoginComponent } from "./components/login/login.component";
import { SearchComponent } from "./components/search/search.component";
import { EditComponent } from "./components/search/edit/edit.component";

const routes: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "product", component: ProductComponent },
  { path: "content", component: ContentComponent },
  { path: "search", component: SearchComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "**", component: ProductComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
