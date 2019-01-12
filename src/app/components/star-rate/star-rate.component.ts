import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'star-rate',
    templateUrl: './star-rate.component.html',
    styleUrls: ['./star-rate.component.scss']
})
export class StarRateComponent implements OnInit {
    @Input()
    public rate: number;

    public rateArr = [];

    ngOnInit(): void {
        for (let i = 1; i <= this.rate; i++) {
            this.rateArr.push(i);
        }
    }
}
