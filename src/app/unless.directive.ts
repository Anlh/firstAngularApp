/*
* Create a custom structural directive life *ngIf fom Angular
* */
import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    // Property binding, set method when something changes with the property
    @Input()
    set appUnless(value: boolean) {
        if (!value) {
            // Create a view in this view container
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            // Clear the view
            this.vcRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    }

}
