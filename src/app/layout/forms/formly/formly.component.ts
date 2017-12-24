import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "formly",
  templateUrl: "formly.component.html",
  styles: [
    `
  .error {
    color: red
  }
  `
  ]
})
export class FormlyComponent implements OnInit {
  form: FormGroup;
  @Input() formDataObj;
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.formDataObj)) {
      formDataObj[prop] = new FormControl(
        this.formDataObj[prop].value,
        this.mapValidator(this.formDataObj[prop].validators)
      );

      this.personProps.push({
        key: prop,
        label: this.formDataObj[prop].label,
        type: this.formDataObj[prop].type,
        options: this.formDataObj[prop].options
      });
    }

    this.form = new FormGroup(formDataObj);
  }

  mapValidator(validators) {
    if (validators) {
      return Object.keys(validators).map(validationType => {
        if (validationType === "required") {
          return Validators.required;
        } else if (validationType === "min") {
          return Validators.min(validators[validationType]);
        }
      });
    } else {
      return [];
    }
  }
}
