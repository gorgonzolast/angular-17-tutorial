import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h2> These are {{ username }}'s favorite games </h2>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName:string) {
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    { id: 1, name: 'Super Mario Bros' },
    { id: 2, name: 'The Legend of Zelda' },
    { id: 3, name: 'Metroid' }
  ]
}
