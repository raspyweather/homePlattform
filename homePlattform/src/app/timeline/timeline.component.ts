import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { InventoryService } from '../inventory.service';
import * as moment from 'moment';
import { TimelineEvent, EventService } from '../event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public events: TimelineEvent[];
  constructor(private readonly eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    /*const now = moment();
    this.addedDevices = devices.filter(device => {
      const diff = moment.duration(now.diff(moment(device.addedAt)));
      return diff.asHours() <= 2;
    });*/
  }
}

