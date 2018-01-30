import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() menuLinkClicked = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    onClickNavLinks(navLinkClicked: string) {
        this.menuLinkClicked.emit(navLinkClicked);
    }

}
