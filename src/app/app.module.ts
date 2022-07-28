import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { LogoComponent } from './components/header/logo/logo.component';

import { LinksComponent } from './components/header/links/links.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LinksComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 1,
      backgroundStrokeWidth: 0,
      backgroundPadding: 0,
      radius: 100,
      space: -4,
      maxPercent: 100,
      outerStrokeGradient: true,
      outerStrokeWidth: 16,
      outerStrokeColor: "blue",
      outerStrokeGradientStopColor: "green",
      innerStrokeColor: "green",
      innerStrokeWidth: 2,
      titleFontSize: "30",
      animationDuration: 1500,
      showSubtitle: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
