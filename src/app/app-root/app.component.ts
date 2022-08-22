import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'inClass-Contacts';
    choices: any = ['home','contacts','charts']
    cmpToShow: string = 'home'

    setCmp(choice:string){
        this.cmpToShow = choice
    }
}
