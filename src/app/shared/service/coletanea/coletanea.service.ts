import { Injectable } from '@angular/core';
import { API_URL } from '../../../core/config/app.config';
import { HttpClient } from '@angular/common/http';
import { ProdutorDTO } from '../../../dto/produtor.dto';
import { Observable } from 'rxjs';
import { AlbumDTO } from '../../../dto/album.dto';
import { MusicaDTO } from '../../../dto/musica.dto';

@Injectable({
  providedIn: 'root'
})
export class ColetaneaService {
  urlColetanea = `${API_URL}/coletanea`;

  constructor(public http: HttpClient) {
  }

  buscarProdutores(): Observable<Array<ProdutorDTO>> {
    const urlProdutores = '/produtores';
    return this.http.get<any>(`${this.urlColetanea}${urlProdutores}`);
  }

  buscarAlbuns(): Observable<Array<AlbumDTO>> {
    const urlAlbuns = '/albuns';
    return this.http.get<any>(`${this.urlColetanea}${urlAlbuns}`);
  }

  buscarMusicas(): Observable<Array<MusicaDTO>> {
    const urlMusicas = '/musicas';
    return this.http.get<any>(`${this.urlColetanea}${urlMusicas}`);
  }

}
