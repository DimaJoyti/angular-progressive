import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "formly",
  templateUrl: "formly.component.html",
  styles: []
})
export class FormlyComponent {
  form = new FormGroup({});
  userModel = { email: "email@gmail.com" };
  userFields: Array<FormlyFieldConfig> = [
    {
      key: "email",
      type: "input",
      templateOptions: {
        type: "email",
        label: "Email address",
        placeholder: "Enter email",
        required: true
      }
    }
  ];

  submit(user) {
    console.log(user);
  }
}
