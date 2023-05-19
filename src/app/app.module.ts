import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ZippyDropdownComponent } from './exercises/zippy-dropdown/zippy-dropdown.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

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
    ZippyDropdownComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CoursesService,
    PostService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
