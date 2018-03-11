import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from './reducers';

import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class StatesModule { }
