import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    // selector: '[app-servers]',
    // selector: '.app-servers',
    // template: `<app-server></app-server><p>The servers component with inline template</p>`,
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 5000);
    }

    ngOnInit() {
    }

}