import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BriefcaseComponent} from './components/briefcase/briefcase.component';
import {CreateDocComponent} from './components/create-doc/create-doc.component';
import {DocumentDetailComponent} from './components/document-detail/document-detail.component';
import {ViewDocComponent} from './components/view-doc/view-doc.component';

const routes: Routes = [
  {
    path: '',
    component: BriefcaseComponent
  }, {
    path: 'create',
    component: CreateDocComponent
  }, {
    path: 'detail/:id',
    component: DocumentDetailComponent
  }, {
    path: 'view',
    component: ViewDocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentManagerRoutesModule {
}
