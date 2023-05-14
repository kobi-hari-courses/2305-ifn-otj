import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchAll } from "rxjs";
import { StoreService } from "../services/store.service";

@Injectable({
    providedIn: 'root'
})
export class WarnInterceptor implements HttpInterceptor {
    constructor(private storeService: StoreService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.warn('I am sending a request');
        console.warn(req.url);
        const newRequest = req.clone({
            setHeaders: {
                'kobi_header': '42'
            }
        });

        const res = next.handle(newRequest).pipe(
            map(async val => {
                if (val.type !== HttpEventType.Response) return val;

                console.log(val.body);
                await this.storeService.setLatestData(val.body);
                const ev = val.clone({body: [...val.body, {id: -1, name: 'Fiction', balance: 1000000}]});
                return ev;
            }), 
            switchAll()
        );

        return res;
        
    }

}