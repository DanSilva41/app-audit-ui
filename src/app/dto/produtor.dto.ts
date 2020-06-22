import { ObjectList } from '../shared/objects/object-list';
import { IObjectList } from '../shared/objects/i-object-list';

export class ProdutorDTO implements IObjectList {
  constructor(public id?: number,
              public nome?: string) {
  }

  // @ts-ignore
  getObjectList(produtorDTO: ProdutorDTO): ObjectList {
    return new ObjectList(produtorDTO.nome, produtorDTO.id);
  }

}
