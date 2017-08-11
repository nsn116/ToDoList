import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
  <div class="container-fluid" style="text-align: center">
    <div class="btn-group">
      <app-addnote></app-addnote>
    </div>
    <div id="textBox" class="collapse well" style="margin-top: 2%;">
      <app-textbox></app-textbox>
    </div>
    <div class="container well" style="margin-top: 2%">
        <app-accordion>
        </app-accordion>
    </div>
    <app-modal></app-modal>
  </div>`
})
export class AppComponent {
}
