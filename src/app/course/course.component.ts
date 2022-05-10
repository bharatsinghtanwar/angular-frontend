import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  title = "List of course";
  courses;

  constructor(service:CoursesService){
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }

 
}
