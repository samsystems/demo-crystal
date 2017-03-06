import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditRoutesModule} from './audit.routes';
import {FormAuditComponent} from './components/form-audit/form-audit.component';
import {CreateAuditComponent} from './components/create-audit/create-audit.component';
import {ListAuditComponent} from './components/list-audit/list-audit.component';
import {FormsModule} from '@angular/forms';
import {DatepickerModule, TooltipModule} from 'ng2-bootstrap';
import {SelectModule} from 'ng2-select';
import {EditAuditComponent} from './components/edit-audit/edit-audit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuditRoutesModule,
    DatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    SelectModule
  ],
  declarations: [
    FormAuditComponent,
    CreateAuditComponent,
    ListAuditComponent,
    EditAuditComponent
  ]
})
export class AuditModule {
}
