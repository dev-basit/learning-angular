import { Component } from '@angular/core';

@Component({
  selector: 'excersices',
  templateUrl: './excersices.component.html', // if this is present, then this will work only, not template or internal html, written below
  template: `
    <button type="button" class="btn btn-default btn-lg" (click)="changeIcon()">
      <p>Exercise - change icon when clickedddd</p>
      <span
        class="glyphicon"
        [class.glyphicon-star]="iconIsActive"
        [class.glyphicon-star-empty]="!iconIsActive"
      ></span>
      Star
    </button>
  `,
  styleUrls: ['./excersices.component.scss'],
  styles: [
    `
      .glyphicon {
        color: green;
      }
    `,
  ],
  // whichever style method comes last will be effective and used
})
export class ExcersicesComponent {
  iconIsActive: boolean = false;

  changeIcon() {
    this.iconIsActive = !this.iconIsActive;
  }
}
