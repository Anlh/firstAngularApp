import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    private intervalFn: number;
    private counter = 1;

    @Output() intervalFired = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    onStartGame() {
        this.intervalFn = window.setInterval(() => {
            this.intervalFired.emit(this.counter++);
        }, 1000);
    }

    onPauseGame() {
        clearInterval(this.intervalFn);
    }

}
