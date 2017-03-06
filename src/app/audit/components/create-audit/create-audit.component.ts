import {Component, OnInit} from '@angular/core';
import {Audit} from '../../../models/audit';
import {AuditService} from '../../../services/audit.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-create-audit',
  templateUrl: './create-audit.component.html',
  styleUrls: ['./create-audit.component.css']
})
export class CreateAuditComponent implements OnInit {

  constructor(private audit: AuditService,
              private location: Location) {
  }

  ngOnInit() {
  }

  create(audit: Audit) {
    this.audit.save(audit);
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }
}
