import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    // EventEmitter is an object of angular framework and let us create our own events and emit them
    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    // public newServerName: string;
    // public newServerContent: string;
    @ViewChild('serverContentInput') serverContentInput: ElementRef;
    constructor() {
    }

    ngOnInit() {
    }


    onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value
        });
    }

    onAddBlueprint() {
        // this.bluePrintCreated.emit({
        //     serverName: this.newServerName,
        //     serverContent: this.newServerContent
        // });
    }

}
