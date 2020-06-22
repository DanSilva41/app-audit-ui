import { Injectable } from '@angular/core';
import { API_URL } from '../../../core/config/app.config';
import { HttpClient } from '@angular/common/http';
import { ProdutorDTO } from '../../../dto/produtor.dto';
import { Observable } from 'rxjs';
import { AlbumDTO } from '../../../dto/album.dto';
import { MusicaDTO } from '../../../dto/musica.dto';
import { LancamentoVM } from '../../../vm/lancamento-vm';

@Injectable({
  providedIn: 'root'
})
export class ProducaoService {
  urlProducao = `${API_URL}/producao`;

  constructor(public http: HttpClient) {
  }

  lancarNovoAlbum(lancamentoVM: LancamentoVM): Observable<AlbumDTO> {
    const urlLancamentoNovoAlbum = '/lancamento/novo-album';
    return this.http.post<AlbumDTO>(`${this.urlProducao}${urlLancamentoNovoAlbum}`, lancamentoVM);
  }

}
