import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  cost = 'string';
  
  saveData(data: Education) {
    this.educationService.update(data.id, data).subscribe(
      (data) => {
        console.log('Agregado correctamente', data);
      },
      (err) => {
        console.log('Fallo la actualizacion');
      }
    );
  }

  education: Education[] = [];
  isLogged = false;

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadEducation();
    this.isLogged = this.tokenService.getToken() ? true : false;
  }

  loadEducation(): void {
    this.educationService.list().subscribe((data) => {
      this.education = data;
    });
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
