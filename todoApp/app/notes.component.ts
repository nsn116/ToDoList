import {Component} from "angular2/core";
import {TextBoxComponent} from "./textBox.component";

@Component({
    selector: 'notes',
    template:  `<table style="text-align: left;">
                    <tr>
                        <th style="width: 25ch"></th>
                        <th style="width: 20ch"></th>
                    </tr>
                    <tr *ngFor="#note of notesArray; #i= index">
                        <td>{{note}}</td>
                        <td style="text-align: center"><button (click)="deleteNote(i)">Delete ?</button></td>
                    </tr>
                </table>`,
    providers: [TextBoxComponent]
})
export class NotesComponent {
    newNote: string;
    notesArray: [string];
    index: number;
    constructor(textBox: TextBoxComponent) {
        this.index = textBox.index;
        this.notesArray = textBox.notesArray;
        this.newNote = textBox.newNote;

    }

    addToNotes() {
        this.notesArray.push(this.newNote);
        this.newNote = "";
        this.index++;
        document.querySelector('textArea').innerHTML = "";
    }

    deleteNote(i) {
        this.notesArray.splice(i, 1);
    }
}