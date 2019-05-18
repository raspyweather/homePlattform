import { Injectable } from '@angular/core';
import { smartDevice } from './devices/smartDevice.interface';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  LOCAL_STORAGE_KEY = 'deviceList';

  constructor() { }

  getDevices(): smartDevice[] {
    const str = localStorage.getItem(this.LOCAL_STORAGE_KEY) || '[]';
    return JSON.parse(str);
  }

  setDevices(devices: smartDevice[]) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(devices));
  }
}
