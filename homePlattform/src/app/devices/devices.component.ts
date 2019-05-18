import { Component, OnInit } from '@angular/core';
import { smartDevice, SmartDeviceType } from './smartDevice.interface';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public registeredDevices: smartDevice[] = [];

  constructor() { }

  ngOnInit() {
    this.registeredDevices.push(...[
      { name: "Mixer", associatedDevice: "Mixer", currentEnergyConsumption: 0.2, type: SmartDeviceType.SmartPlug },
      { name: "60\" Plasma TV", associatedDevice: "Plasma TV", currentEnergyConsumption: 450.3, type: SmartDeviceType.SmartPlug }
    ]);
  }

}
