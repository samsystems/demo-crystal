import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FileManagerComponent} from './components/file-manager/file-manager.component';
import {DocumentDetailComponent} from './components/document-detail/document-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FileManagerComponent
  }, {
    path: 'detail',
    component: DocumentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentManagerRoutesModule {
}
