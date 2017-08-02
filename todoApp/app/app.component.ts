import {Component} from 'angular2/core';
import {TextBoxComponent} from "./textBox.component";
import {NotesComponent} from "./notes.component";

@Component({
    selector: 'my-app',
    template: `<h1 style="padding-left: 10%">To-Do List</h1>
    <textBox style="padding-left: 10%; width: 100%"></textBox>
    <br />
    <br />
    <br />
    <notes></notes>`,
    directives: [TextBoxComponent, NotesComponent]
})
export class AppComponent { }