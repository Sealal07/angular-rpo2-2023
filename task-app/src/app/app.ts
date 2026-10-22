import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
// RouterOutlet <router-outlet>
// RouterLink routerLink - директива для создания ссылок
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, 
    Navbar
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
