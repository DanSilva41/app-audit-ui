import { ObjectList } from '../shared/objects/object-list';
import { IObjectList } from '../shared/objects/i-object-list';

export class MusicaDTO implements IObjectList {
  constructor(public id?: number,
              public titulo?: string,
              public letra?: string) {
  }

  // @ts-ignore
  getObjectList(musicaDTO: MusicaDTO): ObjectList {
    return new ObjectList(musicaDTO.titulo, musicaDTO.id);
  }
}
