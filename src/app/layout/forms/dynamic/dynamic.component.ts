import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "dynamic",
  templateUrl: "dynamic.component.html",
  styles: []
})
export class DynamicComponent implements OnInit {
  form: FormGroup;
  fieldName = 'firstname';
  fieldValue = 'Dima';

  ngOnInit() {
    this.form = new FormGroup({
      [this.fieldName]: new FormControl(this.fieldValue)
    });
  }
}
