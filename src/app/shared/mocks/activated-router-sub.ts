import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { ParamMap, convertToParamMap } from '@angular/router';

@Injectable()
export class ActivatedRouteStub {
  // Observable that contains a map of the parameters
  private subjectParamMap = new BehaviorSubject(
    convertToParamMap(this.testParamMap)
  );
  paramMap = this.subjectParamMap.asObservable();

  private _testParamMap: ParamMap;
  get testParamMap() {
    return this._testParamMap;
  }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subjectParamMap.next(this._testParamMap);
  }

  private _url: string[];
  get testUrl() {
    return this._url;
  }

  set testUrl(url: string[]) {
    this._url = url;
  }

  private _firstChild: any;
  get firstChild() {
    return this._firstChild;
  }

  set firstChild(firstChild: any) {
    this._firstChild = firstChild;
  }

  private _params: string[];
  get testParams() {
    return this._params;
  }

  set testParams(params: string[]) {
    this._params = params;
  }
  // Observable that contains a map of the query parameters
  private subjectQueryParamMap = new BehaviorSubject(
    convertToParamMap(this.testParamMap)
  );
  queryParamMap = this.subjectQueryParamMap.asObservable();

  private _testQueryParamMap: ParamMap;
  get testQueryParamMap() {
    return this._testQueryParamMap;
  }
  set testQueryParamMap(params: {}) {
    this._testQueryParamMap = convertToParamMap(params);
    this.subjectQueryParamMap.next(this._testQueryParamMap);
  }

  get snapshot() {
    return {
      paramMap: this.testParamMap,
      queryParamMap: this.testQueryParamMap,
      url: this.testUrl,
      firstChild: this.firstChild,
      params: { id: 1 }
    };
  }

  get params() {
    return of({ id: '1' });
  }
}
