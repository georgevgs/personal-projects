import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dashboard.component.html'
})
export class DashComponent {
  loadState = 'yes';

  onSwitchState() {
    this.loadState = 'no';
  }
}
