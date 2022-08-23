import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lectus felis. Integer scelerisque eleifend enim eu viverra. In hac habitasse platea dictumst. Pellentesque hendrerit lectus nunc, id vehicula metus interdum vel. Cras egestas nec libero egestas porta. Maecenas egestas malesuada dolor, ac iaculis arcu luctus eu.'

  openContact(action:string){
    var url = ''
    if(action==='mail') url = "https://mail.google.com/mail/?view=cm&fs=1&to=nogaran01@gmail.com"
    if(action==='gh') url = "https://github.com/Noga-Ran"
    if(action==='link') url = "https://www.linkedin.com/in/noga-ran-960892249/"

    window.open(url,"_blank")
  }

}
