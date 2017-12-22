import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  people$;
  
  constructor(private peopleService: PeopleService){}

  fetchPeople() {
    this.people$ = this.peopleService
      .fetchPeople();
  }

}
