import { Injectable } from '@angular/core';
import hotels from './hotels';
import { Hotel } from '../models/Hotel';
import { Observable, of } from 'rxjs';
import { IFilter } from '../models/filter.interface';

@Injectable()
export class DataService {
    private _hotels: Hotel[];

    constructor() {
        this._hotels = hotels.map(h => new Hotel(h));
        console.log('data service created');
    }

    public getHotels(filter: IFilter = {}): Observable<Hotel[]> {
        let result: Hotel[] = this._hotels;

        // filter by hotel name
        if (filter.name) {
            result = this._hotels.filter(h => h.name.toLowerCase().startsWith(filter.name));
        }

        // filter by min price
        if (filter.priceFrom) {
            result = result.filter(h => h.price >= filter.priceFrom);
        }

        // filter by max price
        if (filter.priceTo) {
            result = result.filter(h => h.price <= filter.priceTo);
        }

        // filter by stars
        if (filter.ratings && filter.ratings.length) {
            result = result.filter(h => filter.ratings.includes(h.stars));
        }

        return of(result);
    }
}
