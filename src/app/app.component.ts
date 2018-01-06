import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PBB Info';

  constructor(private route: ActivatedRoute,
      private router: Router) {}

  cariNop(nop) {
    console.log(nop);
    this.router.navigate(['/list-sppt', nop]);
  }
}
