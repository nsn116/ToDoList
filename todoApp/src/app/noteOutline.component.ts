import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Globals} from './global';

@Component({
  selector: 'app-note-outline',
  template: `<h4 class="panel-title" style="text-align: left;">
          <a [attr.data-toggle]="'collapse'" [attr.data-parent]="'#accordion'" [attr.href]="'#' + globals.fixHeading(heading) + 'Content'"
             [attr.id]="globals.fixHeading(heading) + 'Heading'">
            {{heading}}
          </a>
          <div class="btn-group btn-group-xs" style="float: right;">
            <button class="btn btn-danger" style="width: 10vh;" [attr.data-toggle]="'modal'"
                    [attr.data-target]="'#modal'" (click)="openModal()">
              <span class="glyphicon glyphicon-trash"></span>
            </button>
            <button class="btn btn-info" style="width: 10vh;">
              <span class="glyphicon glyphicon-pencil" (click)="editNote()"></span>
            </button>
          </div>
        </h4>`
})
export class NoteOutlineComponent {
  @Input() heading: string;
  @Input() content: string;
  constructor (public globals: Globals) {}
  openModal() {
    this.globals.toDelete = this.heading;
  }
  editNote() {
    document.getElementById('closeBox').click();
    (<HTMLInputElement>document.getElementById('heading')).value = this.heading;
    (<HTMLInputElement>document.getElementById('content')).value = this.content;
    this.globals.toDelete = this.heading;
    this.globals.clearNote();
  }
}
