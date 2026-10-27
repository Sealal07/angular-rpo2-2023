import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { RecipeCard } from './recipe-card/recipe-card';

@Component({
  imports: [RouterOutlet, CommonModule, Header, RecipeCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // title = 'recipes';
  // isWarning: boolean = false;
  // boxColor: string = 'red';

  // isActive: boolean = true;
  recipes = [
    {id: 1, title: 'Паста карбонара', category: 'Паста',
      time: 40, isFavorite: false
    },
    {id: 2, title: 'Цезарь', category: 'Салаты',
      time: 10, isFavorite: false
    },
  ]
  showOnlyFavorite: boolean = false;

  onToggleFavorite(id: number){
   const  recipe = this.recipes.find(r => r.id === id);
   if(recipe){
    recipe.isFavorite = !recipe.isFavorite;
   }
  }
  onToggleFilter(){
    this.showOnlyFavorite = !this.showOnlyFavorite;
  }
  // геттер 
  get filterRecipes(){
    if (this.showOnlyFavorite){
      return this.recipes.filter(r => r.isFavorite);
    }
    return this.recipes;
  }

}
