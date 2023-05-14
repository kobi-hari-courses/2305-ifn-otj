import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EventType } from "@angular/router";
import { Observable, filter, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('I am sending a request');
        console.log(req.url);

        return next.handle(req).pipe(
            filter(val => val.type === HttpEventType.Response), 
            tap(val => {console.log('Request completed', val)})
        )
        
    }
}