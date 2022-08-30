import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from './local.storage.service'
import { Move } from '../models/move.model';
import { Contact } from '../models/contact.model';

const USER = [{
    name: "Demi Userberg",
    coins: 1000,
    moves: []
}]

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private _userDb: User[] = USER;

    private _user$ = new BehaviorSubject<User[]>([])
    public user$ = this._user$.asObservable()
    static getUser: any;

    constructor(private strorage: StorageService) {
    }

    public async loadUser(): Promise<void> {
        let user = await this.strorage.load('loggedUser')
        if(!user) user = this._userDb

        this._user$.next(user)
    }

    public getUser() {
        const user = this._user$
        return user
    }

    async signup(name: string) {
        const user = await this.strorage.load(name)
        if (user) {
            this.strorage.store('loggedUser', user)
            this._user$.next(user)
            return user
        }
        else {
            const newUser = this.getEmptyUser()
            newUser.name = name
            this.strorage.store(name, [newUser])
            this.strorage.store('loggedUser', [newUser])
            this._user$.next(user)
            return newUser
        }
    }

    public makeTransfer(contact: Contact, amount: number) {
        const user = JSON.parse(JSON.stringify(this._user$))._value[0]
        user.coins = user.coins - amount

        const newMove = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount
        } as Move
        
        user.moves.push(newMove)
        this.strorage.store(user.name, [user])
        this.strorage.store('loggedUser', [user])
        this._user$.next(user)
    }

    public getEmptyUser() {
        return { name: '', coins: 100, moves: [] }
    }

    public logOut(){
        this.strorage.remove('loggedUser')
    }

    public isLogged(){
        const log = this.strorage.load('loggedUser')
        if (log) return true
        return false
    }

}