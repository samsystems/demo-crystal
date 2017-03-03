import {
  Component,
  OnInit
} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {NgForm} from '@angular/forms';
import {Tag} from '../../../models/tag';
import {DocumentService} from '../../services/document.service';
import * as moment from 'moment';
import {Rank} from '../../../models/rank';
import {
  Document,
  Status
} from '../../../models/document';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.css']
})
export class CreateDocComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: ''});

  tags: Tag[];
  ranks: Rank[];
  primary: any[];
  secundary: any[];
  content: string = '<span>My Document\'s Title</span>';
  initVersion: "1.0.0";

  constructor(private docService: DocumentService,
              private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.tags = JSON.parse(localStorage.getItem('tags'));
    this.ranks = JSON.parse(localStorage.getItem('ranks'));
  }

  public refreshPrimary(value: any): void {
    this.primary = value;
  }

  public refreshSecundary(value: any): void {
    this.secundary = value;
  }

  cancel() {
    this.router.navigateByUrl('');
  }

  createDoc(form: NgForm) {
    if (form.valid) {
      const newDoc: Document = {
        name: form.value.regulationName as string,
        status: Status.Draft,
        version: form.value.version as string,
        isFile: !!this.uploader.queue.length,
        content: this.content,
        date: moment().format(),
        updated: moment().format(),
        comments: form.value.comments as string,
        primary: this.primary,
        secundary: this.secundary,
        tags: form.value.freeTags as string[],
        owner: this.auth.getUser()
      };
      try {
        this.docService.createDoc(newDoc);
        this.router.navigateByUrl('');
      } catch ($e) {
      }
    }
  }
}
