import { Component, HostBinding, HostListener, OnInit } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  isFixedNavbar!: boolean;
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
  }

}
