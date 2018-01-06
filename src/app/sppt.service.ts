import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sppt } from './sppt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpptService {

  constructor(
    private http: HttpClient
  ) { }

  getSppt(nop): Observable<Sppt[]> {
    return this.http.get<Sppt[]>(`api/sppt?nop=${nop}`);
  }

  parsing(nop): string {
    if(nop.length == 18) {
      console.log('kd kecamatan : ' + nop.substring(4,7));
      console.log('kd kelurahan : ' + nop.substring(7,10))

    }
    return '';
  }

}
