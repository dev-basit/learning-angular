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

  onSave() {
    console.log('button clicked');
  }

  checkingEvent(event: any) {
    event.stopPropagation(); // this will stop event bubbling
    console.log('event is ', event);
  }

  affectedByEventBubbling(event: any) {
    console.log('event bubbling occuring ', event);
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
