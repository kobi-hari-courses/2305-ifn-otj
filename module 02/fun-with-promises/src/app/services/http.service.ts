import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Promise<string[]> {
    const obs$ =  this.http.get<string[]>('http://localhost:3000/customers');
    return firstValueFrom(obs$);
  }
}
