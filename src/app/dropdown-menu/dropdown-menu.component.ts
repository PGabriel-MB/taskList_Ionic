import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  completedTasks() {
    // create function to go to the
    // completed Tasks
    console.log('You clicked on me!')
  }

}
