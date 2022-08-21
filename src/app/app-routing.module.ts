import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { NewExperienceComponent } from './components/new-experience/new-experience.component';
import { FormExperienceComponent } from './components/form-experience/form-experience.component';
import { NewEducationComponent } from './components/new-education/new-education.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newExperience', component: NewExperienceComponent },
  { path: 'changeExperience/:id', component: FormExperienceComponent },
  { path: 'newEducation', component: NewEducationComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
