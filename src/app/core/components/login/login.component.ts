import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: boolean = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.valid) {
      this.error = !this.auth.authenticate(form.value);
    }
  }
}
