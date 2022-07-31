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
  experience: Experience[] = [];
  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.loadExperience();
    this.isLogged = this.tokenService.getToken() ? true : false;
  }

  loadExperience(): void {
    this.experienceService.list().subscribe((data) => {
      this.experience = data;
    });
  }
}
