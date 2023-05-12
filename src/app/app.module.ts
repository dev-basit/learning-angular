import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { ExcersicesComponent } from './excersices/excersices.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, SummaryPipe, ExcersicesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
