import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css'],
})
export class NewExperienceComponent implements OnInit {
  companyName: string = '';
  details: string = '';
  period: string = '';
  recomendations: string = '';

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const experience = new Experience(
      this.companyName,
      this.period,
      this.details,
      this.recomendations
    );
    this.experienceService.save(experience).subscribe(
      (data) => {
        console.log('Agregado correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        console.log('Fallo la actualizacion de la experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
