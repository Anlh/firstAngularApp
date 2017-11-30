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
    serverCreationStatus: string = 'Server was not created yet!';
    serverName: string = 'Test name server';
    serverCreated: boolean = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 5000);
    }

    ngOnInit() {
    }

    onServerCreate(): void {
        this.serverCreated = true;
        this.serverCreationStatus = 'Server was created! The name of the server is ' + this.serverName;
    }

    onUpdateServerName(event: Event): void {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
