import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  form!: FormGroup
    addresses!: FormArray
    constructor(private fb: FormBuilder) {

        this.form = this.fb.group({
            first: ['Sasha', [Validators.required]], // [initialValue, validators, asyncValidators]
            last: '',
            username: '',
            addresses: this.getAddressArray(),
            newsletter: '',
        })


        // this.form = new FormGroup(({
        //     first: new FormControl(''),
        //     last: new FormControl(''),
        //     username: new FormControl(''),
        //     address: new FormGroup(({
        //         street: new FormControl('')
        //         city: '....'
        //     })),
        // }))
    }

    onAddAddress() {
        this.addresses.push(this.getAddressGroup())
    }

    getAddressArray() {
        this.addresses = this.fb.array([this.getAddressGroup()])
        return this.addresses
    }

    getAddressGroup() {
        return this.fb.group({
            street: '',
            city: '',
            state: '',
            zip: ''
        })
    }


    ngOnInit(): void {
    }

}
