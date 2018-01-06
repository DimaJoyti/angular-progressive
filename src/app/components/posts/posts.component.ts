import { Component } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Post } from "../../models/post.mode";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';


@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent {
  readonly ROOT_URL = "https://jsonplaceholder.typicode.com";

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set("userId", "1");
    let headers = new HttpHeaders().set("Authorization", "auth-token");

    this.posts = this.http.get(this.ROOT_URL + "/posts", { params, headers });
  }

  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: "My New Post",
      body: "Hello World!"
    };

    this.newPost = this.http.post(this.ROOT_URL + "/posts", data);
    .retry(3)
    .catch(err => {
      console.log(err)
      return Observable.of(err)
    })
  }
}
