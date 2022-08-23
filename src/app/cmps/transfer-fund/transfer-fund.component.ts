import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,) { }

  @Input() contactName!: string
  @Input() maxCoins!: number
  @Output() onTransfer = new EventEmitter<number>()

  amount!: number

  ngOnInit(): void {
  }

  transfer() {
    console.log(this.amount);
    if (this.amount <= this.maxCoins) {
      this.onTransfer.emit(this.amount)
      this.amount = 0
      var audio = new Audio('assets/sounds/coins.mp3');
      audio.play();
    }
  }

}
