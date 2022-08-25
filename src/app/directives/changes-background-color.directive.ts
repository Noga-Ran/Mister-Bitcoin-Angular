import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[changesBackgroundColor]'
})
export class ChangesBackgroundColorDirective {

    constructor(private el: ElementRef) { }
    @Input() changesBackgroundColor!:string
    @Output() onBlur = new EventEmitter()
   
    @HostListener('click', ['$event'])
    onClick(ev: MouseEvent) {
        if(this.changesBackgroundColor==='false') this.bgColor = this.randomColor
        if(this.changesBackgroundColor==='true') this.isEditable = true
    }
    
    @HostListener('mouseleave')
    onMouseLeave() {
        this.isEditable = false
        this.cursor = 'pointer'
    }

    @HostListener('focus')
    onFocus() {
        this.cursor = ''
    }

    @HostListener('blur')
    _onBlur() {
        const { innerText } = this.el.nativeElement
        this.onBlur.emit(innerText)
    }

    @HostBinding('style.backgroundColor')
    bgColor = ''

    @HostBinding('contentEditable')
    isEditable = false


    @HostBinding('style.cursor')
    cursor = 'pointer'

    get randomColor(){
      return '#' + Math.floor(Math.random()*16777215).toString(16)
    }
}
