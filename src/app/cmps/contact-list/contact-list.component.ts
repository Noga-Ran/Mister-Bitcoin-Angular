import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }
  @Input() contacts!: Contact[] | null
  @Output() onRemove = new EventEmitter<string>()
  @Output() onSelect = new EventEmitter<string>()


  ngOnInit(): void {
  }

}
