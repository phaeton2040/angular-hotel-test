import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './pages/main/app.component';
import { DataService } from './services/data.service';
import { CoreModule } from './core/core.module';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { StarRateComponent } from './components/star-rate/star-rate.component';
import { HotelFilterComponent } from './components/hotel-filter/hotel-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    StarRateComponent,
    HotelFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
