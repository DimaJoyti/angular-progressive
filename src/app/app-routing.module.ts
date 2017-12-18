import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ProductComponent } from "./pages/product/product.component";
import { LoginComponent } from "./pages/login/login.component";
import { ContentComponent } from "./pages/content/content.component";

const routes: Routes = [
  { path: "product", component: ProductComponent },
  { path: "content", component: ContentComponent },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "product" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
