import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.css',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  @Input() title:string = '';
  @Input() category: string = '';
  @Input() time: number = 0;
  @Input() isFavorite: boolean = false;

  @Output() toggleFavorite = new EventEmitter();

  onFavoriteClick(){
    this.toggleFavorite.emit();
  }
}
