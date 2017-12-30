import { NgModule } from "@angular/core";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { environment } from "../../environments/environment.prod";

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule
  ],
  providers: []
})
export class CoreModule {}
