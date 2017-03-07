import {Component, OnInit, AfterContentInit, ContentChild, ElementRef} from '@angular/core';
import {InputDirective} from '../input.directive';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css'],
  host: {
    // Remove align attribute to prevent it from interfering with layout.
    '[class.form-group]': 'true',
    '[class.ng-untouched]': '_shouldForward("untouched")',
    '[class.ng-touched]': '_shouldForward("touched")',
    '[class.ng-pristine]': '_shouldForward("pristine")',
    '[class.ng-dirty]': '_shouldForward("dirty")',
    '[class.ng-valid]': '_shouldForward("valid")',
    '[class.ng-invalid]': '_shouldForward("invalid")',
    '[class.ng-pending]': '_shouldForward("pending")',
    '[class.has-error]': '_hasError("pending")'
  }
})
export class InputContainerComponent {

  @ContentChild(InputDirective) _inputChild: InputDirective;

  _shouldForward(prop: string): boolean {
    let control = this._inputChild ? this._inputChild._ngControl : null;
    return control && (control as any)[prop];
  }

  _hasError(): boolean {
    return this._shouldForward('dirty') && this._shouldForward('invalid')
      || this._shouldForward('touched') && this._shouldForward('invalid');
  }
}
