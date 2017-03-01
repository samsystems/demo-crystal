import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentManagerRoutesModule} from './document-manager.routes';
import {
  TabsModule,
  ModalModule,
  ButtonsModule
} from 'ng2-bootstrap';
import {FileUploadModule} from 'ng2-file-upload';

import {BriefcaseComponent} from './components/briefcase/briefcase.component';
import {CreateDocComponent} from './components/create-doc/create-doc.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DocumentManagerRoutesModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    FileUploadModule,
    SharedModule
  ],
  declarations: [
    BriefcaseComponent,
    CreateDocComponent
  ]
})
export class DocumentManagerModule {
}
