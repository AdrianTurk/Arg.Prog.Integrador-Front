import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-form-experience',
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.css'],
})
export class FormExperienceComponent implements OnInit {
  entry: Experience = null;

  constructor(
    private experienceService: ExperienceService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      (data) => {
        this.entry = data;
      },
      (err) => {
        alert('Error en ngOnInit()' + this.entry);
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.experienceService.update(id, this.entry).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error en onUpdate()');
        this.router.navigate(['']);
      }
    );
  }
}
