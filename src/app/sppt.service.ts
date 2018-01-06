import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sppt } from './sppt';
import { Response } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpptService {

  constructor(
    private http: HttpClient
  ) { }

  getSppt(nop): Observable<Sppt[]> {
    return this.http.get<Sppt[]>(`http://localhost:8765/api/sppt?nop=${nop}`.map((res: Response) => res.json());
  }

  parsing(nop): string {
    if(nop.length == 18) {
      console.log('kd kecamatan : ' + nop.substring(4,7));
      console.log('kd kelurahan : ' + nop.substring(7,10))

    }
    return '';
  }

}
