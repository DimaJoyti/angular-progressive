import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.sass"]
})
export class CompanyComponent implements OnInit {
  widgets$: Observable<any>;

  constructor(public db: CompanyService) {}

  ngOnInit() {
    this.widgets$ = this.db.colRef.valueChanges();
  }

  deleteWidgets() {
    this.db.deleteCollection("widgets", 5).subscribe();
  }
}
