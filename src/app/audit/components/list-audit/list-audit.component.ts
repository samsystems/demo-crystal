import {Component, OnInit} from '@angular/core';
import {AuditService} from '../../services/audit.service';
import {Audit, StatusLabels} from '../../../models/audit';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-list-audit',
  templateUrl: './list-audit.component.html',
  styleUrls: ['./list-audit.component.css']
})
export class ListAuditComponent implements OnInit {

  filter: Object;

  auditTypes: string[] = ['Internal ISM'];

  locations: string[] = ['Crystal Serenity'];

  audits: Audit[];
  readonly statusLabels: string[] = StatusLabels;

  constructor(private audit: AuditService, private auth: AuthService) {
  }

  search() {
    this.audits = this.audit.find(this.filter);
  }

  resetSearch() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.filter = {
      title: null,
      status: null,
      date: null,
      type: null,
      location: null
    };
    this.search();
  }

  getAuditor(username: string) {
    return this.auth.findUser(username);
  }

  removeAudit(id: string) {
    if (window.confirm('Are you sure that you want remove the audit selected')) {
      this.audit.delete(id);
      this.search();
    }
  }
}
