import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  rootName = 'George';

  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onItemWasAdded(newItem): void {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  onNameChanged(newName): void {
    this.rootName = newName;
  }
}
