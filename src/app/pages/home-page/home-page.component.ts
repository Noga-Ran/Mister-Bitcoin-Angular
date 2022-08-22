import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/Bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }


  user!: User[]
  user$!: Observable<User[]>
  subscription!: Subscription
  ans!: any
  imgs = {
    coins: '/imgs/coins.png',
    bitcoin: ''
  }

  async ngOnInit(): Promise<void> {

    this.userService.loadUser()
    const user = this.userService.user$
    this.user$ = user
    var ans = (await this.bitcoinService.getRate(this.getUser.coins)).subscribe((res: any) => {
      this.ans = res
    });

  }

  get getUser() {
    const user = JSON.parse(JSON.stringify(this.user$))
    return user.source._value[0]
  }



}
