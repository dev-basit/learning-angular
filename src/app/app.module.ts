import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './services/courses.service';
import { SummaryPipe } from './custom-pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPannelComponent } from './bootstrap-pannel/bootstrap-pannel.component';
import { LikeComponent } from './exercises/like-component/like-component.component';
import { ExcersicesComponent } from './exercises/excersices/excersices.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormDirective } from './custom-directives/input-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    ExcersicesComponent,
    FavoriteComponent,
    BootstrapPannelComponent,
    LikeComponent,
    DirectivesComponent,
    InputFormDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
