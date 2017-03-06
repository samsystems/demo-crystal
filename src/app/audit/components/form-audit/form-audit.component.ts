import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import * as _ from 'lodash';
import {User} from '../../../models/user';
import {Audit, Status} from '../../../models/audit';
import * as uuid from 'uuid';

@Component({
  selector: 'app-form-audit',
  templateUrl: 'form-audit.component.html',
  styleUrls: ['form-audit.component.css']
})
export class FormAuditComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  auditTypes: string[] = ['Internal ISM'];

  locations: string[] = ['Crystal Serenity'];

  @Input() audit: Audit;

  auditers = [];

  usersAuditers: any = [];

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    let users = this.auth.getAuditors();
    if (_.isArray(users)) {
      users.map((value: User) => {
        this.usersAuditers.push({
          id: value.username,
          text: `${value.firstName} ${value.lastName}`
        })
      })
    }
    if (!this.audit) {
      this.audit = {
        id: uuid.v4(),
        title: null,
        status: Status.In_Progress,
        type: null,
        location: null,
        startDate: null,
        endDate: null,
        auditers: [],
        summary: null
      };
    }
  }

  refreshAuditers(values) {
    this.audit.auditers = values;
  }

  submit(form: NgForm) {
    if (form.valid) {
      console.log(this.audit);
      this.onSubmit.emit(this.audit);
    }
  }
}
