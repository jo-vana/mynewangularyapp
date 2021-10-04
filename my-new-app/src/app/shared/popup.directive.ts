import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[mousOverPopUp]'
})

export class MouseOverPopup implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'open');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }
}