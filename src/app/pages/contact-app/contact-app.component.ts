import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserMsgService } from 'src/app/services/user-msg.service'; 
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
    selector: 'contact-app',
    templateUrl: './contact-app.component.html',
    styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit, OnDestroy {

    constructor(
        private contactService: ContactService,
        private userMsg: UserMsgService,
        private clipboard: Clipboard
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
        this.userMsg.setUserMsg(`Contact removed (${contactId})`)
        var audio = new Audio('assets/sounds/trash.mp3')
        audio.play()
    }

    onCopy(copy:string){
        console.log(copy);
        this.clipboard.copy(copy);
        this.userMsg.setUserMsg(`Phone copied to clipboard`)
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe()
    }

}
