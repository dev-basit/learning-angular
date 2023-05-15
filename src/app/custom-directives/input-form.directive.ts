import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputForm]',
})
export class InputFormDirective {
  @Input() appInputFormat = 'lowercase';

  constructor(private el: ElementRef) {
    // console.log(el);
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.appInputFormat === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }
}
