import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "../../service/contentful.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {

  product$: Observable<any>;
  
  constructor(private contentful: ContentfulService) {}
  
  ngOnInit() {
    this.contentful.logContent('')
    this.product$ = this.contentful.getContent('');
  }

}
