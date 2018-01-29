import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated // Emulated(default), None, Native(shadow dom)
})
export class ServerElementComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy{

    @Input('srvElement') public element: { type: string, name: string, content: string };
    @Input() name: string;
    @ViewChild('heading') header: ElementRef;
    @ContentChild('contentParagraph') paragraph: ElementRef;

    constructor() {
        console.log('Constructor called');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnInit called');
        console.log('Text content: ' + this.header.nativeElement.textContent);
        console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    ngDoCheck() {
        console.log('ngDoCheck called');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit called');
        console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        console.log('Text content: ' + this.header.nativeElement.textContent);
    }

    ngOnDestroy() {
        console.log('ngOnDestroy called');
    }

}
