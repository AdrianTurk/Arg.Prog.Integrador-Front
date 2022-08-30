import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    public utils: UtilityService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
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

  updateProject(id: number, data: Project) {
    console.log('update: ', id, ' ::  ', data);
    if (id) this.projectService.update(id, data).subscribe();
    else this.projectService.save(data).subscribe();
  }
}
