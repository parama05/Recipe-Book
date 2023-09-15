import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostBinding('class.show') isShow:boolean = false;

  @HostListener('click') toggleOpen() {
    this.isShow = !this.isShow;
    let toggler = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isShow) {
      this.renderer.addClass(toggler, 'show');
    } else {
      this.renderer.removeClass(toggler, 'show');
    }
  }
}
