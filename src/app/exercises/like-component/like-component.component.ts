import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.scss'],
})
export class LikeComponent {
  @Input() likesCount: any;
  @Input() isLiked: any;
  @Output() change = new EventEmitter();

  updateLike() {
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked);
  }
}
