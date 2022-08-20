import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  isLogged = false;

  constructor(
    private projectService: ProjectService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    this.isLogged = this.tokenService.getToken() ? true : false;
  }
  loadProjects(): void {
    this.projectService.list().subscribe((data) => {
      this.projects = data;
    });
  }

  deleteProject(id: number) {
    if (id) {
      this.projectService.delete(id).subscribe(
        (data) => {
          this.loadProjects();
        },
        (err) => {
          alert(`No se pudo borrar id: ${id}`);
        }
      );
    }
  }
}
