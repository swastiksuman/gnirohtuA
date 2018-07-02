import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectModule } from './project/project.module';
import { TopNavComponent } from './commons/top-nav.component';
import { ProductComponent } from './product/product.component';
import { SPARouting } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    ProjectModule,
    SPARouting,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
