import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  cost = 'string';
  text: string;

  saveData(data: Education) {
    this.educationService.update(data.id, data).subscribe();
  }

  education: Education[] = [];

  constructor(
    private educationService: EducationService,
    public util: UtilityService
  ) {}

  ngOnInit(): void {
    this.loadEducation();
  }

  loadEducation(): void {
    this.educationService.list().subscribe((data) => {
      this.education = data;
    });
  }

  updateEducation(id: number, data: Education) {
    if (id) this.educationService.update(id, data).subscribe();
    else this.educationService.save(data).subscribe();
  }

  addEducation() {
    this.education.push(
      new Education(
        'Nombre de la Entidad',
        'Titulo obtenido',
        'Detalles de la formación'
      )
    );
  }

  deleteEducation(id: number) {
    if (id) {
      this.educationService.delete(id).subscribe(
        (data) => {
          this.loadEducation();
        },
        (err) => {
          alert(`No se pudo borrar id: ${id}`);
        }
      );
    }
  }
}
