import { NgModule } from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    DropdownModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
