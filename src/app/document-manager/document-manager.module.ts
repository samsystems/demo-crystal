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

import {BriefcaseComponent} from './components/briefcase/briefcase.component';
import {CreateDocComponent} from './components/create-doc/create-doc.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DocumentDetailComponent} from './components/document-detail/document-detail.component';
import {DocumentDetailFlowComponent} from './components/document-detail-flow/document-detail-flow.component';
import {DocumentDetailReleaseComponent} from './components/document-detail-release/document-detail-release.component';
import {DocumentService} from './services/document.service';

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
    SharedModule
  ],
  declarations: [
    BriefcaseComponent,
    CreateDocComponent,
    DocumentDetailComponent,
    DocumentDetailFlowComponent,
    DocumentDetailReleaseComponent
  ],
  providers: [DocumentService]
})
export class DocumentManagerModule {
}
