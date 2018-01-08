import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sppt } from './sppt';
import { Response } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json', 
     'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
};

@Injectable()
export class SpptService {

  sppt: Sppt;
  listSppt: any; 

  constructor( 
    private http: HttpClient
  ) { }

  getSppt(nop): any {
    console.log('dari getSppt(' + nop + ')');
    console.log('isi observable http.get : ' + this.http.get<Sppt[]>('http://localhost:8765/api/sppt?nop=' + nop));
    this.http.get('http://localhost:8765/api/sppt?nop=' + nop).pipe(
      map((res: any) => {
          console.log(res.kdPropinsi);
          return new Sppt(
            res.kdPropinsi, res.kdDati2, res.kdKecamatan, 
            res.kdKelurahan, res.kdBlok, res.noUrut, res.kdJnsOp, res.thnPajakSppt, res.siklusSppt,
            res.kdKanwilBank, res.kdKppbbBank, res.kdBankTunggal, res.kdBankPersepsi, res.kdTp, 
            res.nmWpSppt, res.jlnWpSppt, res.blokKavNoWpSppt, res.rwWpSppt, res.rtWpSppt, 
            res.kelurahanWpSppt, res.kotaWpSppt, res.kdPosWpSppt, res.npwpSppt, res.noPersilSppt,
            res.kdKlsTanah, res.thnAwalKlsTanah, res.kdKlsBng, res.thnAwalKlsBng, res.tglJatuhTempoSppt, 
            res.luasBumiSppt, res.luasBngSppt, res.njopBumiSppt, res.njopBngSppt, res.njopSppt, 
            res.njoptkpSppt, res.njkpSppt, res.pbbTerhutangSppt, res.faktorPengurangSppt, res.pbbYgHarusDibayarSppt, 
            res.statusPembayaranSppt, res.statusTagihanSppt, res.statusCetakSppt, res.tglTerbitSppt,
            res.tglCetakSppt, res.nipPencetakSppt
          );
      }));
      
  }

  parsing(nop): string {
    if(nop.length == 18) {
      console.log('kd kecamatan : ' + nop.substring(4,7));
      console.log('kd kelurahan : ' + nop.substring(7,10))

    }
    return '';
  }

}
