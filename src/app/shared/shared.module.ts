import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocEditorComponent} from './components/doc-editor/doc-editor.component';
import {InputTagComponent} from './components/input-tag/input-tag.component';

@NgModule({
  imports: [CommonModule],
  exports: [DocEditorComponent, InputTagComponent],
  declarations: [DocEditorComponent, InputTagComponent],
  providers: [],
})
export class SharedModule {
}
