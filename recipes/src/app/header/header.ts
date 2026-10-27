import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  appName: string = 'Книга рецептов';
  @Output() filterToggle = new EventEmitter<void>();

  onFilterClick(){
    this.filterToggle.emit();
  }
}
