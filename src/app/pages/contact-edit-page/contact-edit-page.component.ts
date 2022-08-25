import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HostListener } from '@angular/core';
import { StorageService } from 'src/app/services/local.storage.service';

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
    private fb: FormBuilder,
    private storage:StorageService
  ) { }

  contact!: Contact
  title:string = ''
  userEdit:{name:boolean,phone:boolean,email:boolean} = {
    name: false,
    phone: false,
    email:false
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      if(contact){
        this.title = 'EDIT'
        this.contact = JSON.parse(JSON.stringify(contact))
      }else{
        this.title = 'ADD'
        this.contact = this.contactService.getEmptyContact() as Contact
      }
    })
  }

  onCancel(event:MouseEvent){
    event.stopPropagation()
    const preUrl = this.storage.load('url')
    if(preUrl) this.router.navigateByUrl(`/${preUrl.url}`)
    else this.router.navigateByUrl(`/contacts`)
  }

  async onSaveContact(form: NgForm) {
    this.contactService.saveContact(this.contact)
    const preUrl = this.storage.load('url')
    if(preUrl) this.router.navigateByUrl(`/${preUrl.url}`)
    else this.router.navigateByUrl(`/contacts`)
  }

  onBlur(input:string){
    if(input==='name') this.userEdit.name = true
    if(input==='phone') this.userEdit.phone = true
    if(input==='email') this.userEdit.email = true
  }

}
