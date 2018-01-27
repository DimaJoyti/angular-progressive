import { NgModule } from "@angular/core";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { environment } from "../../environments/environment.prod";

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    //.enablePersistence(),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: []
})
export class CoreModule {}
