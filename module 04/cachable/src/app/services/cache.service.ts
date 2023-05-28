import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService<K> {

  readonly promises: Map<K, Promise<any>> = new Map();

  get<T>(key: K, factory: () => Promise<T>): Promise<T> {
    if (!this.promises.has(key)) {
      const valuePromise = factory();
      this.promises.set(key, valuePromise);
    }

    return this.promises.get(key) as Promise<T>;
  }
}
