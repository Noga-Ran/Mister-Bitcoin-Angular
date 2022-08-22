import { Component, Input,Output,EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    @Input() contactId!: string
    @Output() goBack = new EventEmitter<string>()
    contact!: Contact
    ans!: string
    subscription!: Subscription
    // ans$!: Observable<string>

    onGoBack(){
        this.router.navigateByUrl('/contacts')
    }


    async ngOnInit() {
        this.route.data.subscribe(data => {
            this.contact = data['contact']
        })

    }

    removeContact() {
        if(this.contact._id) this.contactService.deleteContact(this.contact._id)
        this.router.navigateByUrl('/contacts')
    }
    
    onEdit(){
        this.router.navigateByUrl(`/contacts/edit/${this.contact._id}`)
    }

    ngOnDestroy(): void {
        if(this.subscription) this.subscription.unsubscribe()
    }

}
