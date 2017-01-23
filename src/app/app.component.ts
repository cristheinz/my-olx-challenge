import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {name: "item 1", isActive: false},
    {name: "item 2", isActive: false},
    {name: "item 3", isActive: false},
    {name: "item 4", isActive: false},
    {name: "item 5", isActive: true},
    {name: "item 6", isActive: true}
  ];
}
