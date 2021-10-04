import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";
// import { Event } from "@angular/router";

@Directive({
  selector: '[appDropdown]'
})
  
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elemRef: ElementRef) { }
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  toggleOpen(event: any) {
    this.elemRef.nativeElement.contains(event.target) ? this.isOpen = !this.isOpen : this.isOpen = false;
  }

}
