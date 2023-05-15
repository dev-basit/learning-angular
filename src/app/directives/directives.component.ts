import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  courses = [1, 2];
  viewMode = 'other';
  subjects = [
    { id: 0, name: 'subject1' },
    { id: 1, name: 'subject2' },
    { id: 2, name: 'subject3' },
  ];

  teachers: any;
  isApplicable = true;
  canSave = true;

  onAdd() {
    let id = this.subjects.length;
    this.subjects.push({ id: id, name: 'subject4' });
  }

  removeSubject(index: number) {
    this.subjects.splice(index, 1);
  }

  loadTeachers() {
    this.teachers = [
      { id: 0, name: 'teacher1' },
      { id: 1, name: 'teacher2' },
      { id: 2, name: 'teacher3' },
    ];
  }

  trackTeacher(teacher: any) {
    return teacher ? teacher.id : undefined;
  }

  updateIsApplicable() {
    this.isApplicable = !this.isApplicable;
  }
}
