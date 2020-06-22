import { ObjectList } from './object-list';

export interface IObjectList {
  getObjectList<T extends IObjectList>(item: T): ObjectList;
}
