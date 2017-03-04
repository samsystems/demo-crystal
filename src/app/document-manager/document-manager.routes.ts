import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BriefcaseComponent} from './components/briefcase/briefcase.component';
import {CreateDocComponent} from './components/create-doc/create-doc.component';
import {DocumentDetailComponent} from './components/document-detail/document-detail.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentManagerRoutesModule {
}
