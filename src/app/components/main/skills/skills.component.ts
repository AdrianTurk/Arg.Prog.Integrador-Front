import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  isLogged = false;

  constructor(
    private skillService: SkillService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadSkills();
    this.isLogged = this.tokenService.getToken() ? true : false;
  }
  loadSkills(): void {
    this.skillService.list().subscribe((data) => {
      this.skills = data;
    });
  }

  deleteSkill(id: number) {
    if (id) {
      this.skillService.delete(id).subscribe(
        (data) => {
          this.loadSkills();
        },
        (err) => {
          alert(`No se pudo borrar id: ${id}`);
        }
      );
    }
  }
}
