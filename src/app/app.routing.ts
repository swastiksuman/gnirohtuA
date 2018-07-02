import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProductComponent } from './product/product.component';
import { ProjectContextComponent } from './project/project-context/project-context.component';

export const customRoutes: Routes = [
  {path: '', component: ProjectListComponent},
  {path: 'product', component: ProductComponent},
  {path: 'projectContext', component: ProjectContextComponent},
  {path: '**', component: ProjectListComponent}
];
export const SPARouting = RouterModule.forRoot(customRoutes);
