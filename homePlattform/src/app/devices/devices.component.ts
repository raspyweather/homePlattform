import { Component, OnInit } from '@angular/core';
import { smartDevice, SmartDeviceType } from './smartDevice.interface';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  LOCAL_STORAGE_KEY:string = "deviceList";

  public registeredDevices: smartDevice[] = [];
  public formDeviceName: String = "";
  public formDeviceAssociation: String = "";

  public showForm = false;

  constructor() { }

  ngOnInit() {
    const deviceListJsonString = '';
    const devices = this.getDevices();
    if(devices.length === 0){
      this.insertDevice(
        { 
          name: "Mixer", 
          associatedDevice: "Mixer", 
          currentEnergyConsumption: 0.2, 
          type: SmartDeviceType.SmartPlug 
        });
        this.insertDevice(
          {
            name: "60\" Plasma TV", 
            associatedDevice: "Plasma TV", 
            currentEnergyConsumption: 450.3, 
            type: SmartDeviceType.SmartPlug
          });
    }
  }

  getDevices(): smartDevice[] {
    const str = localStorage.getItem(this.LOCAL_STORAGE_KEY) || '[]';
    return JSON.parse(str);
  }

  setDevices(devices: smartDevice[]) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(devices));
  }

  removeDevice(deviceIndex: number){
    const elements = this.getDevices();
    this.setDevices(elements.filter((x, i) => i !== deviceIndex));
  }

  insertDevice(device: smartDevice) {
    this.setDevices([...this.getDevices(), device]);
  }

  registerDeviceManually(){
    const device: smartDevice = {
      name: this.formDeviceName,
      associatedDevice: this.formDeviceAssociation,
      currentEnergyConsumption: parseFloat(((Math.random() * (900.00 - 0.00)) / 4.0).toFixed(2)),
      type: SmartDeviceType.SmartPlug
    };
    this.insertDevice(device);
    this.resetFormFields();
  }

  resetFormFields(){
    this.formDeviceName = "";
    this.formDeviceAssociation = "";
  }

}
