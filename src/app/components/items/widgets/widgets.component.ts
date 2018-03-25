import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { AppStore } from "../common/models/appstore.model";
import { Store } from '@ngrx/store';

import { Widget } from "../common/models/widget.model";
import { WidgetsList } from './widgets-list.component';
import { WidgetDetails } from './widget-details.component';
import { WidgetsService } from "../common/services/widgets.service";

@Component({
  selector: 'widgets',
  template: `
    <h4>Fix my inputs and outputs!</h4>
    <div class="mdl-grid items">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets"
        (selected)="selectWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-details (saved)="saveWidget($event)"
        [widget]="selectedWidget | async"></widget-details>
      </div>
    </div>
  `,
  styles: [`
    .widgets {
      padding: 20px;
    }
  `],
})
export class Widgets {
  widgets = [];
  selectedWidget: Observable<Widget>;

  constructor(private _widgetsService: WidgetsService,
    private _store: Store<AppStore>) {
    this.selectedWidget = _store.select('selectedWidget');

    _widgetsService.loadWidgets()
      .subscribe(
        widgets => this.widgets = widgets,
        error => console.error(error.json())
      );
  }

  selectWidget(widget) {
    this._store.dispatch({ type: 'SELECT_WIDGET', payload: widget });
  }

  saveWidget(widget) {
    console.log('widget', widget);
  }
}
