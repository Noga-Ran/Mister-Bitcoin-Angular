import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';


@Component({
    selector: 'contact-app',
    templateUrl: './contact-app.component.html',
    styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit, OnDestroy {

    constructor(
        private contactService: ContactService,
    ) { }

    contacts!: Contact[]
    contacts$!: Observable<Contact[]>
    subscription!: Subscription
    prm = Promise.resolve('Resolved!!!!')
    selectedContactId!: string

    ngOnInit(): void {
        this.contactService.loadContacts({ term: '' })
        this.contacts$ = this.contactService.contacts$
    }

    onRemoveContact(contactId: string) {
        this.contactService.deleteContact(contactId)
        var audio = new Audio('assets/sounds/trash.mp3')
        audio.play()
    }

    onSelectContactId(contactId: string) {
        this.selectedContactId = contactId
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe()
    }

}
