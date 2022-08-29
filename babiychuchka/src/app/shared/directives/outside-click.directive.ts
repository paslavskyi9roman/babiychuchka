import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
})
export class OutsideClickDirective {
  @Input('appOutsideClick') public isElementShown: boolean;
  @Output() public clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const isClickedOutside = !this.elementRef.nativeElement.contains(targetElement);
    console.log('click');

    if (targetElement && isClickedOutside && this.isElementShown) {
      this.clickOutside.emit();
      console.log('should close');
    }
  }
}
