import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-addnote',
  template: `
      <button type="button" class="btn btn-warning btn-lg" disabled>
        Add Note
        <span class="glyphicon glyphicon-file" style="margin-left: 0.4em"></span>
      </button>
    <button type="button" class="btn btn-warning btn-lg" data-toggle="collapse" id="closeBox"
            [attr.data-target]="'#' + 'textBox'">
        <span class="glyphicon glyphicon-plus"></span>
      </button>`
})

export class AddNoteComponent {
}
