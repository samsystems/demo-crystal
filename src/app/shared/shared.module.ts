import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTagComponent} from './components/input-tag/input-tag.component';
import {InputContainerComponent} from './components/input-container/input-container.component';
import {InputDirective} from './components/input.directive';

@NgModule({
  imports: [CommonModule],
  exports: [InputTagComponent, InputContainerComponent, InputDirective],
  declarations: [InputTagComponent, InputContainerComponent, InputDirective],
  providers: [],
})
export class SharedModule {
}
