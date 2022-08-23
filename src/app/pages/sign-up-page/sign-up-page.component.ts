import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,) { }
    
    loggedInUser:boolean = true

  ngOnInit(): void {
    this.loggedInUser = this.userService.isLogged()
  }

  userName: string = ''

  login(action:string) {
    if(action==='login'){
      this.userService.signup(this.userName)
      this.router.navigateByUrl('/')
      this.userName = ''
    }else{
      this.userService.logOut()
      this.loggedInUser = false
    }
  }

}
