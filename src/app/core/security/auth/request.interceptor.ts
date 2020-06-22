import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
    | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    const token = this.tokenService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
    }
    return next.handle(req);
  }
}
