import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-audit',
  templateUrl: 'form-audit.component.html',
  styleUrls: ['form-audit.component.css']
})
export class FormAuditComponent implements OnInit {

  auditers = ["asd"];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  refreshAuditers(values) {
    this.auditers = values;
  }

  cancel(){
    this.router.navigateByUrl('/audit');
  }
}
