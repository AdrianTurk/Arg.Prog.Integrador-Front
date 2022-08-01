import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  entityName: string = '';
  title: string = '';
  details: string = '';

  
  constructor(
    private educationService: EducationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const education = new Education(
      this.entityName,
      this.title,
      this.details,
    );
    this.educationService.save(education).subscribe(
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
