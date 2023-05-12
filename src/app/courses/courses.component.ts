import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  author = 'Basit';
  isActive = true;
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  // onSave() {
  //   console.log('button clicked');
  // }

  // checkingEvent(event: any) {
  //   event.stopPropagation(); // this will stop event bubbling
  //   console.log('event is ', event);
  // }

  // affectedByEventBubbling(event: any) {
  //   console.log('event bubbling occuring ', event);
  // }

  // // We need the event object here
  // traditionalEventFiltering(event: any) {
  //   if (event.keyCode === 13)
  //     console.log('event filtering from traditional way');
  // }

  // // we do not need the event object here
  // angularEventFiltering() {
  //   console.log('angular event filtering feature');
  // }

  // traditionallyHandleInput(event: any) {
  //   console.log('Traditional way of getting input value ', event.target.value);
  // }

  // angularHandleInput(name: String) {
  //   console.log('Angular way of getting input value ', name);
  // }

  oneWayBinding() {
    console.log(
      'author is ',
      this.author,
      '\n',
      'You see name is not changing, this is one way binding'
    );
  }

  twoWayBinding() {
    console.log(
      'author is ',
      this.author,
      '\n',
      'You see name is changing, this is two way binding'
    );
  }
}
