import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-input-multiline',
  templateUrl: './edit-input-multiline.component.html',
  styleUrls: ['./edit-input-multiline.component.css'],
})
export class EditInputMultilineComponent implements OnInit {
  @Input() data: string;
  @Output() focusOut = new EventEmitter<string>();
  editMode = false;
  constructor() {}

  ngOnInit() {}

  onFocusOut() {
    this.focusOut.emit(this.data);
  }

  lostFocus(event: Event) {
    (event.target as HTMLInputElement).blur();
  }
}
