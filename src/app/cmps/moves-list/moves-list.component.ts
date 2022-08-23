import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  constructor() { }
    url:string = ''
    movesToDisplay!:Move[]
    headLine!:string

  @Input() moves!: Move[]
  @Input() contactId!:any

  ngOnInit(): void {
    if(!this.contactId) this.url = 'home'
    else this.url = 'contact'

    this.getMoves()
  }

  getMoves(){
    if(this.url==='home'){
      this.movesToDisplay = (this.moves.slice(-3)).reverse()
      this.headLine = 'Your Last 3 Moves:'
    }
    else{
      this.movesToDisplay = (this.moves.filter(move => move.toId===this.contactId)).reverse()
      this.headLine = 'Your Moves:'
    }
  }

}
