import {Directive, Renderer, ElementRef, Optional} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: `input[bsInput], textarea[bsInput], select[bsInput]`,
  host: {
    '[class.form-control]': 'true'
  }
})
export class InputDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer,
              @Optional() public _ngControl: NgControl) {
  }

}
