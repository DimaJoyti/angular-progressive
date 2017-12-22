import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { ProductComponent } from './components/product/product.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: PeopleComponent},
  { path: "login", component: LoginComponent},
  { path: "product", component: ProductComponent},
  { path: "content", component: ContentComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
