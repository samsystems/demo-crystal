import {
  Component,
  OnInit
} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.css']
})
export class CreateDocComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: ''});

  constructor() {
  }

  ngOnInit() {
  }

}
