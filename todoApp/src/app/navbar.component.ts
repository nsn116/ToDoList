import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Notes</a>
        </div>
        <p class="navbar-text navbar-right" style="padding-right: 5vh">Inspired By Google Keep</p>
      </div>
    </nav>`
})

export class NavbarComponent { }
