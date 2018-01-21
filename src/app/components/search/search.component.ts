import { Component } from "@angular/core";
import { SearchService, Person } from "./search.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
  query: string;
  searchResults: Array<Person>;
  sub: Subscription;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    this.sub = this.route.params.subscribe(params => {
      if (params["term"]) {
        this.query = decodeURIComponent(params["term"]);
        this.search();
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  search(): void {
    this.searchService.search(this.query).subscribe(
      data => {
        this.searchResults = data;
      },
      error => console.log(error)
    );
  }
}
