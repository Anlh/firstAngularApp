import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // To bind to a property of the element we want to attach this directive we use thie HostBinding directive like this:
    // class here for example is a property with an Array of all the classes for the current element
    // This will be handled by angular, angular will update this class dynamically
    @HostBinding('class.open') isOpen = false;


    @HostListener('click') toggleOpen(event: Event) {
        this.isOpen = !this.isOpen;
    }

}
