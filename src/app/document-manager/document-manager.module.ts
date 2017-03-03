import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentManagerRoutesModule} from './document-manager.routes';
import {
  TabsModule,
  ModalModule,
  ButtonsModule
} from 'ng2-bootstrap';
import {FileUploadModule} from 'ng2-file-upload';
import {SelectModule} from 'ng2-select';
import {FroalaEditorModule} from 'angular2-froala-wysiwyg/editor';
import {FroalaViewModule} from 'angular2-froala-wysiwyg/view';

import {BriefcaseComponent} from './components/briefcase/briefcase.component';
import {CreateDocComponent} from './components/create-doc/create-doc.component';
import {FormsModule} from '@angular/forms';
import {DocumentService} from './services/document.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DocumentManagerRoutesModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    FileUploadModule,
    SelectModule,
    FroalaEditorModule,
    FroalaViewModule,
    SharedModule
  ],
  declarations: [
    BriefcaseComponent,
    CreateDocComponent
  ],
  providers: [
    DocumentService
  ]
})
export class DocumentManagerModule {
}
