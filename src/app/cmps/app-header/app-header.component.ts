import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, HostBinding, HostListener, OnInit } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  animations: [       // metadata array
      trigger('toggleClick', [     // trigger block
      state('true', style({      // final CSS following animation
        backgroundColor: 'green',
        opacity:1
      })),
      state('false', style({
        backgroundColor: 'red',
        opacity:1
      })),
      transition('true => false', animate('3000ms linear')),  // animation timing
      transition('false => true', animate('3000ms linear'))
    ]),
    trigger('accordion', [
      transition(':enter', [
        style({ height: 0 }),
        animate('1000ms', style({ "height": '*' })),
      ]),
      transition(':leave', [
        animate('100ms', style({ "height": 0 }))
      ])
    ]),
  ] 
})
export class AppHeaderComponent implements OnInit {

  isFixedNavbar!: boolean;
  isActive:string = ''
  isGreen: string = 'true';

  @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor(
  ) { }
  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  closeMenue(){
    this.navbarOpened = false
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
    console.log(this.navbarOpened);
    
  }

  // fadeIn(){
  //   if(this.isActive==='active') this.isActive = ''
  //   else this.isActive='active'
  //   console.log(this.isActive)
  // }

  toggleIsCorrect() {
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value
  }

}
