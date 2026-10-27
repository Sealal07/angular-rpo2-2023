import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  @Input() title: string = 'заголовок';
  @Input() desc: string = 'описание';

  likeCount: number = 0;

  incrementLikes(){
    this.likeCount++;
  }
  // выходное событие. EventEmitter-объект для создания выходного события
  @Output() cardDelete = new EventEmitter<void>();

  onDeleteClick(){
    this.cardDelete.emit(); // проброс события наверх
  }
}
