import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State, getUser} from '../../reducers';
import * as auth from '../../actions/auth';
import {User} from '../../../models';


@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html'
})

export class NavigationComponent implements OnInit {

  user: User;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select(getUser).subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.store.dispatch(new auth.LogoutAction());
  }
}
