import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectContextComponent } from './project-context/project-context.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ProjectListComponent, ProjectContextComponent],
  exports: [ProjectListComponent, ProjectContextComponent]
})
export class ProjectModule {}
