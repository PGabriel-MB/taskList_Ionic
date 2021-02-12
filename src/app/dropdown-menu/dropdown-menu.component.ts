import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  completedTasks(event: any) {
    this.router.navigate(['/completed-tasks']);
    console.log(event);
  }

}
