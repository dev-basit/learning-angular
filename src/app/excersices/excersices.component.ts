import { Component } from '@angular/core';

@Component({
  selector: 'excersices',
  template: `
    <button type="button" class="btn btn-default btn-lg" (click)="changeIcon()">
      <p>Exercise - change icon when clicked</p>
      <span
        class="glyphicon"
        [class.glyphicon-star]="iconIsActive"
        [class.glyphicon-star-empty]="!iconIsActive"
      ></span>
      Star
    </button>
  `,
  // templateUrl: './excersices.component.html',
  styleUrls: ['./excersices.component.scss'],
})
export class ExcersicesComponent {
  iconIsActive: boolean = false;

  changeIcon() {
    this.iconIsActive = !this.iconIsActive;
  }
}
