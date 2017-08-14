import { Injectable } from '@angular/core';

Injectable();
export class Globals {
  notes: string[] = [];
  toDelete: string;
  clearNote() {
    let index = 0;
    for (; index < this.notes.length; index++) {
      if (this.toDelete === JSON.parse(this.notes[index]).h) {
        break;
      }
    }
    // this.globals.isEditing = event[1];
    this.notes.splice(index, 1);
  }
  fixHeading(str) {
    return str.replace(/ /g, '_');
  }
}
