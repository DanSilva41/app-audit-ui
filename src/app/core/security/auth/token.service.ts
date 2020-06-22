import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({ providedIn: 'root' })
export class TokenService {

  hasToken() {
    const token = this.getToken();
    return token && !!token;
  }

  setToken(token) {
    if (token) {
      window.localStorage.setItem(KEY, token);
    } else {
      window.localStorage.removeItem(KEY);
    }
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
