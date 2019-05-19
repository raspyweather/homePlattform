import { Component, OnInit } from '@angular/core';
import { SmartDevice, SmartDeviceType } from './smartDevice.interface';
import { DeviceService } from '../device.service';
import * as moment from 'moment';
import { EventService } from '../event.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {


  public registeredDevices: SmartDevice[] = [];
  public formDeviceName = '';
  public formDeviceAssociation = '';
  public showForm = false;

  constructor(private readonly deviceService: DeviceService,
    private readonly eventService: EventService) { }

  ngOnInit() {
    this.registeredDevices = this.deviceService.getDevices();
    if (this.registeredDevices.length === 0) {
      this.insertDevice(
        {
          name: 'Mixer',
          associatedDevice: 'Mixer',
          currentEnergyConsumption: 0.2,
          type: SmartDeviceType.SmartPlug,
          addedAt: moment('20150420', 'YYYYMMDD').locale('DE').format()
        });
      this.insertDevice(
        {
          name: '60" Plasma TV',
          associatedDevice: 'Plasma TV',
          currentEnergyConsumption: 450.3,
          type: SmartDeviceType.SmartPlug,
          addedAt: moment('20120620', 'YYYYMMDD').locale('DE').format()
        });
    }
  }

  removeDevice(deviceIndex: number) {
    const removedDevice = this.registeredDevices[deviceIndex];
    this.registeredDevices = this.deviceService.getDevices().filter((x, i) => i !== deviceIndex);
    this.eventService.addEvent({
      action: 'Remove',
      title: 'Gerät ' + removedDevice.name + ' wurde entfernt',
      eventDate: moment().toISOString(),
      source: 'Device',
      sourceDetail: removedDevice
    });
    this.deviceService.setDevices(this.registeredDevices);
  }

  insertDevice(device: SmartDevice) {
    this.registeredDevices.push(device);
    this.eventService.addEvent({
      action: 'Add',
      title: 'Neues Gerät hinzugefügt: ' + device.name,
      description: 'Das Gerät wurde assoziiert mit ' + device.associatedDevice,
      eventDate: moment().toISOString(),
      source: 'Device',
      sourceDetail: device
    })
    this.deviceService.setDevices(this.registeredDevices);
  }

  registerDeviceManually() {
    const device: SmartDevice = {
      name: this.formDeviceName,
      associatedDevice: this.formDeviceAssociation,
      currentEnergyConsumption: parseFloat(((Math.random() * (900.00 - 0.00)) / 4.0).toFixed(2)),
      type: SmartDeviceType.SmartPlug,
      addedAt: moment().locale('DE').format()
    };
    this.insertDevice(device);
    this.resetFormFields();
  }

  resetFormFields() {
    this.formDeviceName = '';
    this.formDeviceAssociation = '';
  }

}
