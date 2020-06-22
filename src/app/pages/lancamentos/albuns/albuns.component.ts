import { Component, OnInit } from '@angular/core';
import { ObjectList } from '../../../shared/objects/object-list';
import { ColetaneaService } from '../../../shared/service/coletanea/coletanea.service';
import { ProdutorDTO } from '../../../dto/produtor.dto';
import { ListUtil } from '../../../shared/objects/list-util';
import { AlbumDTO } from '../../../dto/album.dto';
import { MusicaDTO } from '../../../dto/musica.dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LancamentoVM } from '../../../vm/lancamento-vm';
import { ProducaoService } from '../../../shared/service/producao/producao.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css'],
  providers: [ColetaneaService]
})
export class AlbunsComponent implements OnInit {

  listaProdutores: Array<ObjectList>;
  listaAlbuns: Array<ObjectList>;
  listaMusicas: Array<ObjectList>;

  formAlbum: FormGroup;

  constructor(private coletaneaService: ColetaneaService,
              private producaoService: ProducaoService) {
  }

  ngOnInit() {
    this.inicializarForm();
    this.buscarListas().then(() => {
    });
  }

  private inicializarForm() {
    this.formAlbum = new FormGroup({
      titulo: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      produtor: new FormControl('', Validators.required),
      musicas: new FormControl('', Validators.required)
    });
  }

  private buscarListas() {
    return Promise.all([
      this.buscarProdutores(),
      this.buscarAlbuns(),
      this.buscarMusicas()
    ]);
  }

  private buscarProdutores() {
    if (ListUtil.isListaInvalidaOuVazia(this.listaProdutores)) {
      return this.coletaneaService.buscarProdutores().toPromise()
        .then((produtores: Array<ProdutorDTO>) => {
          this.listaProdutores = ListUtil.transformListToObjectList(produtores, new ProdutorDTO());
        });
    }
  }

  private buscarAlbuns() {
    if (ListUtil.isListaInvalidaOuVazia(this.listaAlbuns)) {
      return this.coletaneaService.buscarAlbuns().toPromise()
        .then((albuns: Array<AlbumDTO>) => {
          this.listaAlbuns = ListUtil.transformListToObjectList(albuns, new AlbumDTO());
        });
    }
  }

  private buscarMusicas() {
    if (ListUtil.isListaInvalidaOuVazia(this.listaMusicas)) {
      return this.coletaneaService.buscarMusicas().toPromise()
        .then((musicas: Array<MusicaDTO>) => {
          this.listaMusicas = ListUtil.transformListToObjectList(musicas, new MusicaDTO());
        });
    }
  }

  lancarAlbum() {
    const titulo: string = this.formAlbum.get('titulo').value;
    const autor: string = this.formAlbum.get('autor').value;
    const idProdutor: number = this.formAlbum.get('produtor').value.map(v => v.value)[0];
    const musicas: Array<number> = this.formAlbum.get('musicas').value.map(v => v.value);

    const lancamentoVM: LancamentoVM = new LancamentoVM();
    lancamentoVM.album = new AlbumDTO(undefined, titulo, autor);
    lancamentoVM.idProdutor = idProdutor;
    lancamentoVM.musicas = musicas;

    this.producaoService.lancarNovoAlbum(lancamentoVM).toPromise()
      .then((album: AlbumDTO) => {
        console.log(album);
      });
  }

}
