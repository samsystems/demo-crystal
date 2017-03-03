import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {Status, Document} from '../../models/document';
import {Tag} from '../../models/tag';
import {User} from '../../models/user';
import {Rank} from '../../models/rank';

@Injectable()
export class DocumentService {
  _documents: BehaviorSubject<Array<Object>> = new BehaviorSubject([]);
  _states: BehaviorSubject<Array<Object>> = new BehaviorSubject([]);
  _releases: BehaviorSubject<Array<Object>> = new BehaviorSubject([]);

  constructor() {
    this._documents.next([
      new Document(Status.Draft, '1.0.0', true, 'lorem ipsum, lorem ipsum', [new Tag('Onboard'), new Tag('Voyage'), new Tag('Vessel')], new User('carlososiel'), [], []),
      new Document(Status.Approved, '1.0.0', true, 'lorem ipsum, lorem ipsum', [new Tag('Onboard')], new User('carlososiel'), [], []),
      new Document(Status.Published, '1.0.0', true, 'lorem ipsum, lorem ipsum', [new Tag('Onboard')], new User('carlososiel'), [], []),
    ]);
    this._states.next([
      {
        'status': 'Reject',
        'modified': Date.now(),
        'completion': 0,
        'description': 'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum'
      },
      {
        'status': 'Pending',
        'modified': Date.now(),
        'completion': 40,
        'description': 'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum'
      },
      {
        'status': 'Approved',
        'modified': Date.now(),
        'completion': 75,
        'description': 'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum'
      },
      {
        'status': 'Completed',
        'modified': Date.now(),
        'completion': 100,
        'description': 'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum'
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

  getDocuments(): Observable<Array<Object>> {
    return this._documents.asObservable();
  }
}
