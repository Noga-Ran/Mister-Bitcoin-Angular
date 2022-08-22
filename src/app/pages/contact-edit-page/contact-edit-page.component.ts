import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  // form!: FormGroup
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  contact!: Contact

  // form = this.fb.group({
  //   name: '',
  //   phone: '',
  //   email: ''
  // })

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
      // this.startName = this.contact.name
      // this.startPhone = this.contact.phone
      // this.startEmail = this.contact.email
    })
  }

  onCancel(event:MouseEvent){
    event.stopPropagation()
    this.router.navigateByUrl('/contacts')
  }

  async onSaveContact(form: NgForm) {
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contacts')
  }

}
