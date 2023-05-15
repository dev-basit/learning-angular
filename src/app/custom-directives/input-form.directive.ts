import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputForm]',
})
export class InputFormDirective {
  @Input() appInputForm: string = 'lowercase';

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.appInputForm === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }
}
