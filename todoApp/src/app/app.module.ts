import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar.component';
import {AddNoteComponent} from './addNote.component';
import {TextboxComponent} from './textbox.component';
import {AccordionComponent} from './accordion.component';
import {NoteComponent} from './note.component';
import {Globals} from './global';
import {ModalComponent} from './modal.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, AddNoteComponent, TextboxComponent, AccordionComponent, NoteComponent, ModalComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [ Globals ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
