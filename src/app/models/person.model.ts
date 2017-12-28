export interface Peson {
  firstname: {
    label: "Firstname";
    value: "Ivan";
    type: "text";
    validators: {
      required: true;
    };
  };
  age: {
    label: "Age";
    value: 27;
    type: "number";
    validators: {
      min: 18;
    };
  };
  gender: {
    label: "Gender";
    value: "F";
    type: "radio";
    options: [{ label: "Male"; value: "M" }, { label: "Female"; value: "F" }];
  };
  city: {
    label: "City";
    value: "NY";
    type: "select";
    options: [
      { label: "(choose one)"; value: "" },
      { label: "New York"; value: "NY" },
      { label: "Los Angeles"; value: "LA" },
      { label: "Salt Lake City"; value: "SLC" }
    ];
  };
}
