import { IObjectList } from './i-object-list';

export class ListUtil {

  static isListaInvalidaOuVazia(lista: Array<any>) {
    return !lista || lista.length === 0;
  }

  static transformListToObjectList<T extends IObjectList>(lista: Array<T>, newObject: T) {
    if (!this.isListaInvalidaOuVazia(lista)) {
      return lista.map(item => newObject.getObjectList(item));
    }
    return [];
  }

}
