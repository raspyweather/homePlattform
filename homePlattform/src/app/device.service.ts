import { Injectable } from '@angular/core';
import { SmartDevice } from './devices/smartDevice.interface';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  LOCAL_STORAGE_KEY = 'deviceList';

  constructor() { }

  getDevices(): SmartDevice[] {
    const str = localStorage.getItem(this.LOCAL_STORAGE_KEY) || '[]';
    return JSON.parse(str);
  }

  setDevices(devices: SmartDevice[]) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(devices));
  }
}
