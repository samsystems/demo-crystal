import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentManagerRoutesModule} from './document-manager.routes';
import {TabsModule, ModalModule} from 'ng2-bootstrap';
import {FileUploadModule} from 'ng2-file-upload';

import {UploadComponent} from './components/upload/upload.component';
import {BriefcaseComponent} from './components/briefcase/briefcase.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentManagerRoutesModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    FileUploadModule
  ],
  declarations: [UploadComponent, BriefcaseComponent]
})
export class DocumentManagerModule {
}
