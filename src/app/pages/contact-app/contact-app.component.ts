import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'contact-app',
    templateUrl: './contact-app.component.html',
    styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit, OnDestroy {

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private router: Router
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
        console.log(contactId);

        this.contactService.deleteContact(contactId)
    }

    onSelectContactId(contactId: string) {
        this.selectedContactId = contactId
    }

    onAdd() {
        this.router.navigateByUrl(`/contacts/edit`)
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe()
    }

}
