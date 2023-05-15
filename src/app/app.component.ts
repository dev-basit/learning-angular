import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularPractice';
  post = {
    title: 'title...',
    isFavorite: true,
  };

  tweet = {
    isLiked: false,
    likesCount: 105,
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favorite changed', eventArgs);
  }

  changeCounter(isLiked: boolean) {
    if (isLiked) this.tweet.likesCount++;
    else this.tweet.likesCount--;
  }
}
