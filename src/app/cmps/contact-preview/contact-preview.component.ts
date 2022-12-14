import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

    constructor() { }
    @Input() contact!: Contact
    @Output() onRemove = new EventEmitter<string>()
    @Output() onSelect = new EventEmitter<string>()

    ngOnInit(): void {
    }


    onRemoveContact(event:MouseEvent) {
        event.stopPropagation()
        this.onRemove.emit(this.contact._id)
    }

    onSelectCotact(){
        this.onSelect.emit(this.contact._id)
    }

}
