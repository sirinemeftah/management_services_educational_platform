import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { ProfessordashboardComponent } from './components/professordashboard/professordashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ProfessorlistComponent } from './components/professorlist/professorlist.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MycoursesComponent } from './components/mycourses/mycourses.component';

import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationsuccessComponent,
    UserdashboardComponent,
    ProfessordashboardComponent,
    HeaderComponent,
    FooterComponent,
    UserprofileComponent,
    ProfessorprofileComponent,
    AddprofessorComponent,
    AddcourseComponent,
    UserlistComponent,
    ProfessorlistComponent,
    CourselistComponent,

    MycoursesComponent,

    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    YouTubePlayerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, RegistrationComponent]
})
export class AppModule { }
