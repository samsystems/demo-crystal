import {Injectable} from '@angular/core';
import {Audit} from '../../models/audit';
import {Subject, Observable} from 'rxjs';
import * as _ from 'lodash';
import {audit} from 'rxjs/operator/audit';

@Injectable()
export class AuditService {

  audits$ = new Subject<Audit[]>();
  audits: Audit[];

  constructor() {
    this.onInit()
  }

  onInit() {
    let audits = JSON.parse(localStorage.getItem('audits'));
    this.audits = !!audits ? audits : [];
  }

  private syncStore() {
    localStorage.setItem('audits', JSON.stringify(this.audits));
    this.audits$.next(this.audits);
  }

  getAudits(): Audit[] {
    return this.audits;
  }

  find(filter: Object): Audit[] {
    const filters = {};
    _.forEach(filter, (v, i) => {
      if (!_.isEmpty(v)) {
        _.set(filters, i, v);
      }
    });

    return (_.keys(filters).length) ? _.filter(this.audits, filters) : this.getAudits();
  }

  getAudit(id: string): Audit {
    return _.find(this.audits, {'id': id});
  }

  getAuditsObservable(): Observable<Audit[]> {
    return this.audits$.asObservable();
  }

  save(audit: Audit): Audit {
    let p = _.findIndex(this.audits, {'id': audit.id});
    if (p >= 0) {
      this.audits[p] = audit;
    } else {
      this.audits.push(audit);
    }
    this.syncStore();
    return audit;
  }

  delete(id: string) {
    let p = _.findIndex(this.audits, {'id': id});
    if (p >= 0) {
      this.audits.splice(p, 1);
      this.syncStore();
    }
  }
}
