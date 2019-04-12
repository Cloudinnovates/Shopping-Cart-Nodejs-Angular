import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective {

  constructor(public element: ElementRef) {
    console.log('Directiva llamada');
   }

  @HostListener('mouseenter') mouseEntro() {
    this.element.nativeElement.style.background = '#7d3f98';
  }

  @HostListener('mouseleave') mouseSalio() {
    this.element.nativeElement.style.background = null;
  }


}
