import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  person = {
    firstname: {
      label: "Firstname",
      value: "Ivan",
      type: "text"
    },
    age: {
      label: "Age",
      value: 27,
      type: "number"
    },
    gender: {
      label: "Gender",
      value: "F",
      type: "radio",
      options: [{ label: "Male", value: "M" }, { label: "Female", value: "F" }]
    },
    city: {
      label: "City",
      value: "NY",
      type: "select",
      options: [
        { label: "(choose one)", value: "" },
        { label: "New York", value: "NY" },
        { label: "Los Angeles", value: "LA" },
        { label: "Salt Lake City", value: "SLC" }
      ]
    }
  };
}
