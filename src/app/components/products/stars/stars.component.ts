import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
