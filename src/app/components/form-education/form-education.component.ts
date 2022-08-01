import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent implements OnInit {

  education: Education = null;

  constructor(
    private educationService: EducationService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe(
      (data) => {
        this.education = data;
      },
      (err) => {
        alert('Error en ngOnInit()' + this.education);
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.educationService.update(id, this.education).subscribe(
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

