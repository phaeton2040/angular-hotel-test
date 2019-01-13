import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/models/Hotel';
import { IFilter } from 'src/app/models/filter.interface';
import { ISort } from 'src/app/models/sort.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hotels: Observable<Hotel[]>;
  filter: IFilter;
  sort: ISort;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.hotels = this._dataService.getHotels();
  }

  onFilterChanged(filter: IFilter): void {
    this.filter = filter;
    this.hotels = this._dataService.getHotels(this.filter, this.sort);
  }

  onSortChanged(sort: ISort): void {
    this.sort = sort;
    this.hotels = this._dataService.getHotels(this.filter, this.sort);
  }
}
