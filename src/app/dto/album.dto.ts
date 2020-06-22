import { ObjectList } from '../shared/objects/object-list';
import { IObjectList } from '../shared/objects/i-object-list';

export class AlbumDTO implements IObjectList {
  constructor(public id?: number,
              public titulo?: string,
              public autor?: string) {
  }

  // @ts-ignore
  getObjectList(albumDTO: AlbumDTO): ObjectList {
    return new ObjectList(albumDTO.titulo, albumDTO.id);
  }
}
