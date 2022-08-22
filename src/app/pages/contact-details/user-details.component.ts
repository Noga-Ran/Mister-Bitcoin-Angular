import { Component, Input,Output,EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    constructor(private contactService: ContactService) { }
    @Input() contactId!: string
    @Output() goBack = new EventEmitter<string>()
    contact!: Contact
    ans!: string
    subscription!: Subscription
    // ans$!: Observable<string>

    onGoBack(){
        this.goBack.emit()
    }


    async ngOnInit() {
        const contact = await lastValueFrom(this.contactService.getContactById(this.contactId))
        if (contact) this.contact = contact

    }


    ngOnDestroy(): void {
        if(this.subscription) this.subscription.unsubscribe()
    }

}
