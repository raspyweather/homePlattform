import { Component, OnInit } from '@angular/core';
import { smartDevice, SmartDeviceType } from './smartDevice.interface';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {


  public registeredDevices: smartDevice[] = [];
  public formDeviceName = '';
  public formDeviceAssociation = '';
  public showForm = false;

  constructor(private readonly deviceService: DeviceService) { }

  ngOnInit() {
    const deviceListJsonString = '';
    const devices = this.deviceService.getDevices();
    if (devices.length === 0) {
      this.insertDevice(
        {
          name: 'Mixer',
          associatedDevice: 'Mixer',
          currentEnergyConsumption: 0.2,
          type: SmartDeviceType.SmartPlug
        });
      this.insertDevice(
        {
          name: '60" Plasma TV',
          associatedDevice: 'Plasma TV',
          currentEnergyConsumption: 450.3,
          type: SmartDeviceType.SmartPlug
        });
    }
  }



  removeDevice(deviceIndex: number) {
    const elements = this.deviceService.getDevices();
    this.deviceService.setDevices(elements.filter((x, i) => i !== deviceIndex));
  }

  insertDevice(device: smartDevice) {
    this.registeredDevices.push(device);
    this.deviceService.setDevices(this.registeredDevices);
  }

  registerDeviceManually() {
    const device: smartDevice = {
      name: this.formDeviceName,
      associatedDevice: this.formDeviceAssociation,
      currentEnergyConsumption: parseFloat(((Math.random() * (900.00 - 0.00)) / 4.0).toFixed(2)),
      type: SmartDeviceType.SmartPlug
    };
    this.insertDevice(device);
    this.resetFormFields();
  }

  resetFormFields() {
    this.formDeviceName = '';
    this.formDeviceAssociation = '';
  }

}
