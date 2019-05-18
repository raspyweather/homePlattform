import { Component, OnInit } from '@angular/core';
import { smartDevice, SmartDeviceType } from './smartDevice.interface';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public registeredDevices:smartDevice [] = [];

  constructor() { }

  ngOnInit() {
    this.registeredDevices.push({name: "Mixer", currentEnergyConsumption: 0.2, type: SmartDeviceType.SmartPlug});
  }

}
