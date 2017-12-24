import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    // StoreDevtoolsModule.instrument({ maxAge: 25 }),
    // StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([])
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class StatesModule {}
