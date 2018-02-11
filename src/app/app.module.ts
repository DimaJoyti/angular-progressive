import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { FeatureModule } from "./components/feature.module";
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";
import { StatesModule } from "./states/states.module";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { ChartModule } from "./charts/chart.module";

import { environment } from "../environments/environment.prod";
import { PaymentComponent } from './components/payment/payment.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeatureModule,
    SharedModule,
    LayoutModule,
    StatesModule,
    CoreModule,
    ChartModule,
    //ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
