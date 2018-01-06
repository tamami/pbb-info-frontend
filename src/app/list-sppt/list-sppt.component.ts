import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpptService } from '../sppt.service';
import { Observable } from 'rxjs/Observable';

import { Sppt } from '../sppt';

@Component({
  selector: 'app-list-sppt',
  templateUrl: './list-sppt.component.html',
  styleUrls: ['./list-sppt.component.css']
})
export class ListSpptComponent implements OnInit {

  private sub: any;
  private nop: string;
  private listSppt$: Observable<Sppt[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private spptService: SpptService
  ) { }

  ngOnInit() { 
    this.getSpptInfo();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSpptInfo(): void {
    //const nop = +this.route.snapshot.paramMap.get('nop');
    this.sub = this.route.params.subscribe(params => {
      this.nop = params['nop'];
      this.listSppt$ = this.spptService.getSppt(this.nop);
    });
  }

}
