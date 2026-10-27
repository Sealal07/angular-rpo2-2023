import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  siteTitle: string = 'Angular App';
  isLoginToggle: boolean = false;


  toggleLogIn(){
    this.isLoginToggle = !this.isLoginToggle;
  }

}
