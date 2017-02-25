import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BriefcaseComponent} from './components/briefcase/briefcase.component';
import {UploadComponent} from './components/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: BriefcaseComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentManagerRoutesModule {
}
