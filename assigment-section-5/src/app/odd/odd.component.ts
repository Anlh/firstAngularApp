import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-odd',
    templateUrl: './odd.component.html',
    styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
    @Input() number: number; // With this directive we can pass values from outside to this component

    constructor() {
    }

    ngOnInit() {
    }

}
