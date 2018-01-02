import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sppt } from '../sppt';

@Component({
  selector: 'app-list-sppt',
  templateUrl: './list-sppt.component.html',
  styleUrls: ['./list-sppt.component.css']
})
export class ListSpptComponent implements OnInit {

  listSppt: Sppt[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSpptInfo();
  }

  getSpptInfo(): void {
    const nop = +this.route.snapshot.paramMap.get('nop');
  }

}
