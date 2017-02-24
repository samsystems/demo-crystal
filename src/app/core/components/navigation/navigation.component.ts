import {Component} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'navigation',
  templateUrl: './navigation.template.html'
})

export class NavigationComponent {

  constructor() {
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();
  }
}
