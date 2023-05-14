import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPromiseRunning = false;
  private promiseCompleter: (val: number) => void = val => {};


  createPromise() : Promise<number>{
    return new Promise<number>((res, rej) => setTimeout(() => res(42), 3000));
  }

  createDeferredPromise<T>(res: T, delay: number): Promise<T> {
    return new Promise(resolve => setTimeout(() => resolve(res), delay));  
  }


  createUserControlledPromise(): Promise<number> {
    return new Promise((resolve, y) => {
      this.isPromiseRunning = true;
      this.promiseCompleter = (val) => {
        this.isPromiseRunning = false;
        resolve(val);
      }
    });
  }

  createCompletedPromise(res: number): Promise<number> {
    return Promise.resolve(res);
  }

  async createCompletedPromise2(res: number): Promise<number> {
    return res;
  }

  createFaultedPromise(): Promise<number> {
    const res = Promise.reject<number>('Ki ba li');
    return res;
  }

  async createFaultedPromise2(): Promise<number> {
    throw 'Ki Ba li';
  }

  onCompleteClicked(value: number) {
    this.promiseCompleter(value);
  }

  // go() {
  //   console.log('Starting the promise');
  //   const p = this.createPromise();

  //   const q = p.then(res => {
  //     console.log('The promise has completed with result', res);
  //     return 'Hello';
  //   })

  //   console.log('Method go has completed');
    
  // }

  // async go() {
  //   console.log('A');

  //   const q = this.start();

  //   await q; 

  //   console.log('B');
  // }

  // async start() {
  //   console.log('1');
  //   console.log('Starting promise');
  //   const p = this.createUserControlledPromise();

  //   const res = await p;
  //   console.log('Promise completed with result', res);
  // }

  async go() {
    const p1 = this.createDeferredPromise(42, 2000);
    const p2 = this.createDeferredPromise('Hello', 4000);
    const p3 = p2.then(str => str.length > 10);
    const p4 = p1.then(val => val + 200);

    const peverything = Promise.race([p1, p2, p3] as const);
    const res = await peverything;
  }

}
