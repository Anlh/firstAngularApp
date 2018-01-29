import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    oddNumbers: number[] = [];
    evenNumbers: number[] = [];


    onIntervalFired(num: number) {
        // Even
        if (num % 2 === 0) {
            this.evenNumbers.push(num);
        } else { // Odd
            this.oddNumbers.push(num);
        }
    }

}
