import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentManagerRoutesModule} from './document-manager.routes';
import {TabsModule, ModalModule} from 'ng2-bootstrap';
import {FileUploadModule} from 'ng2-file-upload';

import {FileManagerComponent} from './components/file-manager/file-manager.component';
import {DocumentDetailComponent} from './components/document-detail/document-detail.component';
import {DocumentService} from './services/document.service';
import {DocumentDetailFlowComponent} from './components/document-detail-flow/document-detail-flow.component';
import { DocumentDetailReleaseComponent } from './components/document-detail-release/document-detail-release.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentManagerRoutesModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    FileUploadModule
  ],
  declarations: [FileManagerComponent, DocumentDetailComponent, DocumentDetailFlowComponent, DocumentDetailReleaseComponent],
  providers: [DocumentService]
})
export class DocumentManagerModule {
}
