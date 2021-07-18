import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse && event.body) {
            return event.clone({ body: event.body.map(user => ({ ...user, customId: `${user.id}-${user.username}` }))});
        }
      }));
  }
}
