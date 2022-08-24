import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})

export class ContactResolver implements Resolve<Observable<Contact | void>> {

  constructor(private contactService: ContactService) { }
  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id']
        return this.contactService.getContactById(id)
  }
}