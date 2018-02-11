import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GridComponent } from "./components/grid.component";

const routes: Routes = [
  {
    path: "",
    component: GridComponent,
    children: [
      // { path: "grid/:id", component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
