import { Component } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Lesson } from "./../../models/lesson.model";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { switchMap } from "rxjs/operator/switchMap";

@Component({
  selector: "lessons",
  templateUrl: "./lessons.component.html",
  styleUrls: ["./lessons.component.scss"]
})
export class LessonsComponent {
  lessonRef: AngularFirestoreCollection<Lesson>;
  lesson$: Observable<Lesson[]>;
  endDate$: BehaviorSubject<Date>;

  constructor(private afs: AngularFirestore) {
    this.lessonRef = this.afs.collection("Lesson");
    this.lesson$ = this.lessonRef.valueChanges();
  }
}
