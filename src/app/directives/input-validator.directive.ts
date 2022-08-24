import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[inputValidator]'
})
export class InputValidatorDirective {

  constructor(private el: ElementRef) { }
  @Output() onBlur = new EventEmitter()
  @Input() typeInput!:string

  @HostListener('blur')
    _onBlur() {
        this.onBlur.emit(this.typeInput)
    }

}
