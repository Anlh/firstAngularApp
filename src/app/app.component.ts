import {Component} from '@angular/core';
import {UsersService} from "./Services/Users.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UsersService]
})
export class AppComponent {

}
