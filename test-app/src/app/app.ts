import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { Header } from './header/header';
import { Card } from './card/card';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [RouterOutlet, Header, Card, Footer, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'test-app';
  items = [
    {id:1, title: 'First', desc: 'lorem ipsum'},
    {id:2, title: 'Second', desc: 'lorem ipsum'},
    {id:3, title: 'Third', desc: 'lorem ipsum'},
  ]

  removeCard(id: number){
    this.items = this.items.filter(card => card.id !== id );  
  }

    userName: string = ''; //для хранения ввода пользователя
}
