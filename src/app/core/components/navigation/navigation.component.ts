import {Component, OnInit} from '@angular/core';
import {User} from '../../../models';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html'
})

export class NavigationComponent implements OnInit {

  user: User;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getUserObservable().subscribe((user) => {
      this.user = user;
    })
  }

  logout() {
    this.auth.logout();
  }
}
