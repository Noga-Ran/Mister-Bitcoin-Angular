import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Move } from 'src/app/models/move.model';
import { StorageService } from 'src/app/services/local.storage.service';

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private storage: StorageService
    ) { }

    contact!: Contact
    ans!: string
    subscription!: Subscription
    maxCoins!: number
    user$!: Observable<User[]>
    moves!: Move[]
    // ans$!: Observable<string>

    
    async ngOnInit() {
        this.route.data.subscribe(data => {
            this.contact = data['contact']
        })        
        const user = this.userService.user$
        this.user$ = user
        this.maxCoins = this.getUser.coins
        this.moves = this.getUser.moves
    }

    onGoBack() {
        this.router.navigateByUrl('/contacts')
    }

    removeContact() {
        if (this.contact._id) this.contactService.deleteContact(this.contact._id)
        this.router.navigateByUrl('/contacts')
    }

    onEdit() {
        this.storage.store('url',{url:`contacts/${this.contact._id}`})
        this.router.navigate([`/edit/${this.contact._id}`])
        // this.router.navigateByUrl(`/contacts/${this.contact._id}/edit/${this.contact._id}`)
    }

    onTransfer(amount: number) {
        this.userService.makeTransfer(this.contact, amount)
    }

    get getUser() {
        const user = JSON.parse(JSON.stringify(this.user$))
        return user.source._value[0]
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe()
    }

}
