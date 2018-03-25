import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { Items } from './items/items.component';
import { ItemsList } from './items/items-list.component';
import { ItemDetail } from './items/item-detail.component';
import { ItemsService } from './common/services/items.service';
import { selectedItem } from './common/stores/selectedItem.store';

import { Widgets } from './widgets/widgets.component';
import { WidgetsList } from './widgets/widgets-list.component';
import { WidgetDetails } from './widgets/widget-details.component';
import { WidgetsService } from './common/services/widgets.service';

import { GadgetService } from './common/services/gadget.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature('items', selectedItem)
    ],
    exports: [
        Items, ItemsList, ItemDetail,
        Widgets, WidgetsList, WidgetDetails
    ],
    declarations: [
        Items, ItemsList, ItemDetail,
        Widgets, WidgetsList, WidgetDetails
    ],
    providers: [ItemsService, WidgetsService, GadgetService]
})
export class ItemsModule { }
