import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/local.storage.service';

@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private storage: StorageService
    ) { }
    
    @Input() contact!: Contact
    @Output() onRemove = new EventEmitter<string>()
    @Output() onSelect = new EventEmitter<string>()

    ngOnInit(): void {
    }


    onRemoveContact(event:MouseEvent) {
        event.stopPropagation()
        this.onRemove.emit(this.contact._id)
    }

    onEditConatct(event:MouseEvent,contactId:any){
        event.stopPropagation()
        this.storage.store('url',{url:`contacts`})
        this.router.navigateByUrl(`edit/${contactId}`)
    }

}
