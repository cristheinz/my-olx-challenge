import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = [
    {name: "item 1", isActive: false},
    {name: "item 2", isActive: false},
    {name: "item 3", isActive: false},
    {name: "item 4", isActive: false},
    {name: "item 5", isActive: true},
    {name: "item 6", isActive: true}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
