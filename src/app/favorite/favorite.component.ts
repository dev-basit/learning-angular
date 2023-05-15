import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  // inputs: ['title', 'isFavorite'], // method 2 for input data or props, this is not reliable
})
export class FavoriteComponent implements OnInit {
  // Method 1
  @Input() title: any;
  @Input() isFavorite: any;

  // you can also use alias / nickname with method 1. You can also use invalid identifier as name unlike above
  // when you update the actual variable name, still it will work
  // In other words, alias helps in keeping the contract or interface stable for using components
  // @Input("post-title") title: any;
  // @Input("post-isFavorite") isFavorite: any;

  // Method 2
  // use this when u r using input metadata array above, this method also works but its not reliable
  // because when u update field name, it will not update it in input array, so our component will
  // not receive props and it will break our app
  //   title: any;
  // isFavorite: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.title, this.isFavorite);
  }

  changeIcon() {
    this.isFavorite = !this.isFavorite;
  }
}
