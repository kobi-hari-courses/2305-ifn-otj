import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  latestData: any = null;

  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(res => setTimeout(res, millis));
  }

  async setLatestData(newValue: any): Promise<void> {
    console.log('Starting to update storage');
    await this.delay(2000);
    this.latestData = newValue;
    console.log('Storage updated');
  }
}
