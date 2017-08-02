import {Component} from "angular2/core";

@Component({
    selector: 'textBox',
    template: `<textarea id="box" maxlength="100" style="width: 25ch; height: 10ch;" 
                         placeholder="What do you want to do ?" [(ngModel)]="newNote"></textarea>
                <button *ngIf="newNote.length > 0" (click)="addToNotes()">Add Note</button>`
})
export class TextBoxComponent {
    newNote: string;
    notesArray: [string];
    index: number;
    constructor() {
        this.index = 0;
        this.notesArray = <[string]><any>[];
        this.newNote = "";

    }

}