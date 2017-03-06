import {Component, OnInit} from '@angular/core';
import {Audit, StatusLabels} from '../../../models/audit';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuditService} from '../../services/audit.service';

@Component({
  selector: 'app-edit-audit',
  templateUrl: './edit-audit.component.html',
  styleUrls: ['./edit-audit.component.css']
})
export class EditAuditComponent implements OnInit {

  audit: Audit;
  readonly statusLabels: string[] = StatusLabels;

  constructor(private auditService: AuditService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .map((params: Params) => this.auditService.getAudit(params['id']))
      .subscribe(audit => this.audit = audit);
  }

  create(audit: Audit) {
    audit.status = audit.status;
    this.auditService.save(audit);
    this.router.navigateByUrl('/audit');
  }

  onCancel() {
    this.router.navigateByUrl('/audit');
  }

}
