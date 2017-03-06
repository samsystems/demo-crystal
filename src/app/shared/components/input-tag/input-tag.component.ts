import {Component, OnInit, forwardRef, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'input-tags',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputTagComponent), multi: true}
  ]
})
export class InputTagComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') inputElement: ElementRef;
  tags: Array<any> = [];
  size: number = 1;

  _onChange = (value: any) => {
  };

  ngOnInit() {
    this.tags = [];
  }

  writeValue(value: Array<any>) {
    if (_.isArray(value)) {
      this.tags = value;
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched() {

  }

  setDisabledState() {
  }

  removeTag(tag: any) {
    const p = this.tags.indexOf(tag);
    if (p >= 0) {
      this.tags.splice(p, 1);
      this._onChange(this.tags);
    }
  }

  addTag() {
    if (this.getInputValue()) {
      const newTag = this.getInputValue();
      const p = this.tags.indexOf(newTag);
      if (p >= 0) {
        this.tags[p] = newTag;
      } else {
        this.tags.push(newTag);
      }
      this._onChange(this.tags);
      this.resetInputValue();
      return;
    }
  }

  syncSize() {
    if (this.getInputValue()) {
      const newTag = this.getInputValue();
      this.size = newTag.length > 1 ? newTag.length : 1;
    } else {
      this.size = 1;
    }
  }

  getInputValue() {
    return this.inputElement.nativeElement.value;
  }

  resetInputValue() {
    return this.inputElement.nativeElement.value = null;
  }
}
