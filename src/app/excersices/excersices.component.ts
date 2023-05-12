import { Component } from '@angular/core';

@Component({
  selector: 'excersices',
  templateUrl: './excersices.component.html',
  styleUrls: ['./excersices.component.scss'],
})
export class ExcersicesComponent {
  iconIsActive: boolean = false;

  changeIcon() {
    this.iconIsActive = !this.iconIsActive;
  }
}
