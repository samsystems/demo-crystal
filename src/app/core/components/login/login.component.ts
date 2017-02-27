import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';
import * as auth from '../../actions/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.valid) {
      this.store.dispatch(new auth.LoginAction(form.value));
    }
  }
}
