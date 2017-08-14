import {Component} from '@angular/core';
import { Globals } from './global';

@Component({
  selector: 'app-accordion',
  template: `<div class="panel-group" [attr.id]="'accordion'">
        <div class="panel panel-default" [attr.id]="globals.fixHeading(getHeading(note)) + 'Element'" *ngFor="let note of globals.notes">
          <div class="panel-heading">
            <app-note-outline [heading]=getHeading(note) [content]=getContent(note)>
            </app-note-outline>
          </div>
          <div [attr.id]="globals.fixHeading(getHeading(note)) + 'Content'" class="panel-collapse collapse">
            <div class="panel-body">
              {{getContent(note)}}
            </div>
          </div>
        </div>
    </div>`,
})
export class AccordionComponent {
  constructor(public globals: Globals) {
  }
  fillNote(heading: string, content: string) {
    this.globals.notes.unshift(JSON.stringify({
      h: heading,
      c: content
    }));
  }
  getHeading(n) {
    return JSON.parse(n).h;
  }
  getContent(n) {
    return JSON.parse(n).c;
  }
}
