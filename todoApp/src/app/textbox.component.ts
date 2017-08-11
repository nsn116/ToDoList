import {Component} from '@angular/core';
import {AccordionComponent} from './accordion.component';

@Component({
  selector: 'app-textbox',
  template: `<form>
      <div class="form-group">
        <label for="heading">Note Heading: </label>
        <input class="form-control" id="heading" maxlength="40ch" [(ngModel)]="heading" [ngModelOptions]="{standalone: true}"/>
      </div>
      <div class="form-group">
        <label for="content">Enter the content of your note:</label>
        <textarea class="form-control" rows="5" id="content" [(ngModel)]="content" [ngModelOptions]="{standalone: true}">
        </textarea>
      </div>
    </form>
    <div class="btn-group btn-group-justified">
      <div class="btn-group">
        <button type="button" class="btn btn-success" data-toggle="collapse" data-target="#textBox"
                (click)="callFillNote();">
          Submit
          <span class="glyphicon glyphicon-ok"></span>
        </button>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-danger" data-toggle="collapse" data-target="#textBox"
                (click)="clearTextBox()">
          Clear
          <span class="glyphicon glyphicon-remove"></span>
        </button>
      </div>
    </div>`,
  providers: [AccordionComponent]
})
export class TextboxComponent {
  public heading: string;
  public content: string;
  constructor (private accordionComponent: AccordionComponent) {
    this.heading = '';
    this.content = '';
  }
  callFillNote() {
    if (this.heading === '' && this.content === '') {
      return;
    }
    this.accordionComponent.fillNote(this.heading, this.content);
    this.clearTextBox();
  }
  clearTextBox() {
    this.heading = '';
    this.content = '';
    document.getElementById('closeBox').click();
  }
}
