import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sppt',
  templateUrl: './list-sppt.component.html',
  styleUrls: ['./list-sppt.component.css']
})
export class ListSpptComponent implements OnInit {

  listSppt: Sppt[] = [];

  constructor() { }

  ngOnInit() {
  }

}
