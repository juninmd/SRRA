import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SMNUIModule } from 'ng-smn-ui';
import { AppRoutingModule } from '../app-routing.module';

import { OcorrenciaFormComponent } from './ocorrencia-form/ocorrencia-form.component';
import { OcorrenciaGridComponent } from './ocorrencia-grid/ocorrencia-grid.component';
import { OcorrenciaInfoComponent } from './ocorrencia-info/ocorrencia-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SMNUIModule,
    AppRoutingModule
  ],
  declarations: [
    OcorrenciaFormComponent,
    OcorrenciaGridComponent,
    OcorrenciaInfoComponent
  ],
  exports: [
    OcorrenciaFormComponent,
    OcorrenciaGridComponent,
    OcorrenciaInfoComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OcorrenciaModule { }
