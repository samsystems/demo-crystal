import {Component, NgZone, Inject, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: ''});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  action: string = 'write';

  constructor() {
  }

  ngOnInit() {
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
