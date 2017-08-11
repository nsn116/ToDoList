import {Component} from '@angular/core';
import { Globals } from './global';

@Component({
  selector: 'app-accordion',
  template: `<div class="panel-group" [attr.id]="'accordion'">
      <app-note *ngFor="let note of globals.notes" [heading]=getHeading(note) [content]=getContent(note) (clear)="clearNote($event)">
      </app-note>
    </div>`
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

  clearNote(event) {
    debugger;
    let index = 0;
    for (; index < this.globals.notes.length; index++) {
      if (event[0] === JSON.parse(this.globals.notes[index]).h) {
        break;
      }
    }
    // this.globals.isEditing = event[1];
    this.globals.notes.splice(index, 1);

  }
}
