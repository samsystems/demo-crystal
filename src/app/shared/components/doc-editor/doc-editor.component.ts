import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  ElementRef,
  Output,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
declare const tinymce: any;

@Component({
  selector: 'doc-editor',
  template: `<textarea #editor></textarea>`,
  styleUrls: ['doc-editor.component.css']
})
export class DocEditorComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  @ViewChild('editor') element: ElementRef;

  private editor;
  private text: string = '';

  propagateChange = (_: any) => {};

  ngAfterViewInit() {
    tinymce.init({
      selector: `${this.element.nativeElement.type}[${this.element.nativeElement.attributes[0].name}]`,
      plugins: ['link', 'paste', 'table'],
      skin_url: '/assets/skins/custom',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.propagateChange(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.text = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {

  }

  setDisabledState() {
  }
}
