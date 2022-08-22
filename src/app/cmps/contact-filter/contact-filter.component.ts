import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-filter',
    templateUrl: './contact-filter.component.html',
    styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {

    constructor(private contactService: ContactService) { }
    filterBy!: ContactFilter
    subscription!: Subscription

    ngOnInit(): void {
        this.subscription = this.contactService.filterBy$.subscribe(filterBy => {
            this.filterBy = filterBy
        })
    }

    onChangeFilter() {
        this.contactService.loadContacts(this.filterBy)
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

}
