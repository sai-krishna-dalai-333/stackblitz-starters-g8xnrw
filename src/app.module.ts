import { AddProjectComponent } from './addProject-component.component';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddProjectComponent],
  // or
  exports: [AddProjectComponent],
  imports: [
    // Other imports
    ReactiveFormsModule
  ]
  // Other module configurations
})

export class AppModule { }