import {Component} from '@angular/core';
import {TextboxComponent} from './textbox.component';

@Component({
  selector: 'app-addnote',
  template: `<button type="button" class="btn btn-warning btn-lg" disabled>
        Add Note
        <span class="glyphicon glyphicon-file" style="margin-left: 0.4em"></span>
      </button>
    <button type="button" (click)="clearEntries();" class="btn btn-warning btn-lg" data-toggle="collapse" id="closeBox"
            [attr.data-target]="'#' + 'textBox'">
        <span class="glyphicon glyphicon-plus"></span>
      </button>`,
  providers: [TextboxComponent]
})

export class AddNoteComponent {
  clearEntries() {
    (<HTMLInputElement>document.getElementById('heading')).value = '';
    (<HTMLInputElement>document.getElementById('content')).value = '';
  }
}
