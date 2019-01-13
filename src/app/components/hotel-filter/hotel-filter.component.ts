import { Component, Output, EventEmitter } from '@angular/core';
import { IFilter } from 'src/app/models/filter.interface';
import * as debounce from 'lodash.debounce';
import { ISort } from 'src/app/models/sort.interface';

@Component({
    selector: 'hotel-filter',
    templateUrl: './hotel-filter.component.html',
    styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent {
    @Output()
    public filterChanged: EventEmitter<IFilter> = new EventEmitter();

    @Output()
    public sortChanged: EventEmitter<ISort> = new EventEmitter();

    public filter: IFilter = {
        name: '',
        ratings: []
    };


    setInputFilter(event, fieldName: string): void {
        // for the sake of simplicity let's omit input validation here ;)
        debounce(() => {
            this.filter[fieldName] = event.target.value;
            this.filterChanged.emit(this.filter);
        }, 500, {trailing: true})();
    }

    setRatingsFilter(event): void {
        const value = parseInt(event.source.value, 10);

        debounce(() => {
            if (!event.checked) {
                const valueIdx = this.filter.ratings.indexOf(value);

                this.filter.ratings.splice(valueIdx, 1);
            } else {
                this.filter.ratings.push(value);
            }

            this.filterChanged.emit(this.filter);
        }, 500)();
    }

    setSorting(value: ISort): void {
        this.sortChanged.emit(value);
    }
}
