import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Globals} from './global';

@Component({
  selector: 'app-note',
  template: `<div class="panel panel-default" [attr.id]="fixHeading(heading) + 'Element'">
      <div class="panel-heading">
        <h4 class="panel-title" style="text-align: left;">
          <a [attr.data-toggle]="'collapse'" [attr.data-parent]="'#accordion'" [attr.href]="'#' + fixHeading(heading) + 'Content'"
             [attr.id]="fixHeading(heading) + 'Heading'">
            {{heading}}
          </a>
          <div class="btn-group btn-group-xs" style="float: right;">
            <button class="btn btn-danger" style="width: 10vh;" [attr.data-toggle]="'modal'"
                    [attr.data-target]="'#modal'" (click)="callClearNote()">
              <span class="glyphicon glyphicon-trash"></span>
            </button>
            <button class="btn btn-info" style="width: 10vh;">
              <span class="glyphicon glyphicon-pencil" (click)="callEditNote()"></span>
            </button>
          </div>
        </h4>
      </div>
      <div [attr.id]="fixHeading(heading) + 'Content'" class="panel-collapse collapse">
        <div class="panel-body">
          {{content}}
        </div>
      </div>
    </div>
  `
})
export class NoteComponent {
  @Input() heading: string;
  @Input() content: string;
  @Output() clear = new EventEmitter();
  constructor (public globals: Globals) {}
  callClearNote() {
    if (!this.globals.toDelete) {
      return;
    }
    // debugger;
    this.clear.next([this.heading, false]);
  }
  callEditNote() {
    document.getElementById('closeBox').click();
    document.getElementById('heading').outerText = this.heading;
    document.getElementById('content').innerHTML = this.content;
    this.clear.next([this.heading, true]);
  }
  fixHeading() {
    return this.heading.replace(/ /g, '_');
  }
}
// TODO:
// 1)Only one panel at a time
// 2)Edit Note
// 3)Modal for Deletion
