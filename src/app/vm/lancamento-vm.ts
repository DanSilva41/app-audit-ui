import { AlbumDTO } from '../dto/album.dto';

export class LancamentoVM {
  constructor(public album?: AlbumDTO,
              public idProdutor?: number,
              public musicas?: Array<number>) {
  }

}
