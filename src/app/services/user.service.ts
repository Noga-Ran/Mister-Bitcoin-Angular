import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user.model';

const USER = [{
    name: "Ochoa Hyde",
    coins: 1000,
    moves: [1,2,3]
}]

@Injectable({
    providedIn: 'root'
})

export class UserService{
    
    private _userDb: User[] = USER;

    private _user$ = new BehaviorSubject<User[]>([])
    public user$ = this._user$.asObservable()
    static getUser: any;

    constructor() {
    }

    public loadUser(): void {
        let user = this._userDb
        this._user$.next(user)        
    }

    public getUser(){
        const user = this._userDb
        return user
    }

}