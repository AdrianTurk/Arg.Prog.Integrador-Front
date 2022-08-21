import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.css'],
})
export class EditInputComponent implements OnInit {
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
