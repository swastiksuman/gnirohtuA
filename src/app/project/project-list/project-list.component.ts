import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

  projectList: Project[] = PROJECTS;
  constructor() { }

  ngOnInit() { }
}
