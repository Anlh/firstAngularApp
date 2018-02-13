import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    // Custom property binding
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elementRef: ElementRef, private render: Renderer2) {
    }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(event: Event) {
        // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(event: Event) {
        // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        // Another wat to set the styles for the host of our directive
        this.backgroundColor = this.defaultColor;
    }
}
