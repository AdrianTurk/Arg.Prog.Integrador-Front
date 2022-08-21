import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  isLogged = false;
  experiences: Experience[] = [];
  newExp: Experience;
  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadExperience();
    this.isLogged = this.tokenService.getToken() ? true : false;
  }

  loadExperience(): void {
    this.experienceService.list().subscribe((data) => {
      this.experiences = data;
    });
  }

  deleteExperience(id: number) {
    if (id) {
      this.experienceService.delete(id).subscribe(
        (data) => {
          this.loadExperience();
        },
        (err) => {
          alert(`No se pudo borrar id: ${id}`);
        }
      );
    }
  }
  addExperience() {
    this.experiences.push(
      new Experience(
        'Nombre de la Empresa',
        'Puesto',
        'Periodo',
        'Detalles de la experiencia',
        'Recomendaciones'
      )
    );
  }
  updateExperience(id: number, data: Experience) {
    if (id) this.experienceService.update(id, data).subscribe();
    else this.experienceService.save(data).subscribe();
  }
}
