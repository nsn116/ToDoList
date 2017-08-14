import {Component} from '@angular/core';
import {NoteOutlineComponent} from './noteOutline.component';
import {Globals} from './global';

@Component({
  selector: 'app-modal',
  template: `<div id="modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Delete ???</h4>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete this note ?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal" (click)="globals.clearNote()">Yes</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>`,
  providers: [NoteOutlineComponent]
})
export class ModalComponent {
  constructor(public globals: Globals) {
  }
}
