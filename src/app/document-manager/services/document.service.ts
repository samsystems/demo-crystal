import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable()
export class DocumentService {
  _states: BehaviorSubject<Array<Object>> = new BehaviorSubject([]);
  _releases: BehaviorSubject<Array<Object>> = new BehaviorSubject([]);

  constructor() {
    this._states.next([
      {
        'status': 'Reject',
        'modified': Date.now(),
        'completion': 0,
        'class': 'label-danger'
      },
      {
        'status': 'Pending',
        'modified': Date.now(),
        'completion': 40,
        'class': 'label-warning'
      },
      {
        'status': 'Approved',
        'modified': Date.now(),
        'completion': 75,
        'class': 'label-primary'
      },
      {
        'status': 'Completed',
        'modified': Date.now(),
        'completion': 100,
        'class': 'label-default'
      }
    ]);

    this._releases.next([
      {
        'daysAgo': 10,
        'version': '1.2.3',
      },
      {
        'daysAgo': 12,
        'version': '1.2.0',
      },
      {
        'daysAgo': 15,
        'version': '1.1.0',
      },
      {
        'daysAgo': 20,
        'version': '1.0.0',
      },
    ]);
  }

  getStates(): Observable<Array<Object>> {
    return this._states.asObservable();
  }

  getReleases(): Observable<Array<Object>> {
    return this._releases.asObservable();
  }
}
