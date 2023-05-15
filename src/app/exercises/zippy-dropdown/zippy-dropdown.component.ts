import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy-dropdown',
  templateUrl: './zippy-dropdown.component.html',
  styleUrls: ['./zippy-dropdown.component.scss'],
})
export class ZippyDropdownComponent {
  @Input() title: any;
  isDropdown: boolean = false;

  toggleDropdown() {
    this.isDropdown = !this.isDropdown;
  }
}
