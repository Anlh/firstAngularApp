import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-display-details',
    templateUrl: './display-details.component.html',
    styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
    public showDetails: boolean = false;
    public log: Array<number> = [];

    constructor() {
    }

    ngOnInit() {
    }

    onShowDetails(event): void {
        this.showDetails = !this.showDetails;
        this.log.push(event.timeStamp);
    }

}
