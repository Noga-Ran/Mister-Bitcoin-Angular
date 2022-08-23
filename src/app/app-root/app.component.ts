import { Component,OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'inClass-Contacts';
    choices: any = ['home','contacts','charts']
    cmpToShow: string = 'home'

    constructor(private userService: UserService) { }

    async ngOnInit(): Promise<void> {
        await this.userService.loadUser()
    }

    setCmp(choice:string){
        this.cmpToShow = choice
    }
}
