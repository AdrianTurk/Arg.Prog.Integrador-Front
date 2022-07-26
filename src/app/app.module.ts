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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableModel } from './contenteditable.directive';
import { interceptorProvider } from './service/token.interceptor.service';

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
    ContenteditableModel,
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
