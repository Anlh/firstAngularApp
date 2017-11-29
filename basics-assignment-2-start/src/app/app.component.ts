import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    userName: string = '';

    onResetUserName(): void {
        this.userName = '';
    }

    isUserNameEmpty(): boolean {
        return this.userName.length === 0;
    }
}
