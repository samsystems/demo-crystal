import {Component, NgZone, Inject, OnInit} from '@angular/core';
import {NgUploaderOptions} from 'ngx-uploader';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options: NgUploaderOptions;
  response: any;
  hasBaseDropZoneOver: boolean;
  action: string = 'write';

  constructor(@Inject(NgZone) private zone: NgZone) {
  }

  ngOnInit() {
    this.options = new NgUploaderOptions({
      url: 'http://api.ngx-uploader.com/upload',
      calculateSpeed: true
    });
  }

  handleUpload(data: any) {
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
        }
      });
    });
  }

  fileOverBase(e: boolean) {
    this.hasBaseDropZoneOver = e;
  }
}
