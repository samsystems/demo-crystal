import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { NotificationService } from "../shared/services/notification.service";


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DropdownModule,
  ],
  declarations: [ DashboardComponent ],
  providers: [NotificationService]
})
export class DashboardModule { }
