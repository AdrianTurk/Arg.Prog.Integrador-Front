import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';

import { BannerComponent } from './components/main/banner/banner.component';
import { AboutMeComponent } from './components/main/about-me/about-me.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { EducationComponent } from './components/main/education/education.component';
import { SkillsComponent } from './components/main/skills/skills.component';
import { ProjectComponent } from './components/main/project/project.component';

import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/token.interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewExperienceComponent } from './components/new-experience/new-experience.component';
import { FormExperienceComponent } from './components/form-experience/form-experience.component';
import { FormEducationComponent } from './components/form-education/form-education.component';
import { NewEducationComponent } from './components/new-education/new-education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectComponent,
    MainComponent,
    LoginComponent,
    NewExperienceComponent,
    FormExperienceComponent,
    FormEducationComponent,
    NewEducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 1,
      backgroundStrokeWidth: 0,
      backgroundPadding: 0,
      radius: 100,
      space: -4,
      maxPercent: 100,
      outerStrokeGradient: true,
      outerStrokeWidth: 16,
      outerStrokeColor: 'blue',
      outerStrokeGradientStopColor: 'green',
      innerStrokeColor: 'green',
      innerStrokeWidth: 2,
      titleFontSize: '30',
      animationDuration: 1500,
      showSubtitle: false,
    }),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
