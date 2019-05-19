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

  getDurationString(dateStr: string) {
    const now = moment();
    const date = moment(dateStr);
    const diff = moment.duration(now.diff(moment(dateStr)));
    const beforeX = moment(dateStr).locale("de").fromNow();
    if (diff.asDays() >= 7) {
      return date.locale('de').format('Do MMMM YYYY');
    }
    return beforeX;//'vor ' + diff.locale('de').humanize(true);
  }
  getIconClass(timelineEvent: TimelineEvent): IconStyleOption {
    if (timelineEvent.action === 'ScanReceipt' && timelineEvent.source === 'Inventory') {
      return {
        background: 'yellowgreen',
        iconClass: 'fas fa-cart-plus'
      }
    }
    if (timelineEvent.action === 'Add' && timelineEvent.source === 'Inventory') {
      return {
        background: 'yellowgreen',
        iconClass: 'fas fa-plus'
      };
    }
    if (timelineEvent.action === 'Expired' && timelineEvent.source === 'Inventory') {
      return {
        background: 'bordeaux',
        iconClass: 'fas fa-hourglass-end'
      }
    }
    if (timelineEvent.action === 'Remove' && timelineEvent.source === 'Inventory') {
      return {
        background: 'yellowgreen',
        iconClass: 'fas fa-check'
      }
    }
    if (timelineEvent.action === 'Add' && timelineEvent.source === 'Device') {
      return {
        background: 'orange',
        iconClass: 'fas fa-plus'
      }
    }
    if (timelineEvent.action === 'Remove' && timelineEvent.source === 'Device') {
      return {
        background: 'orange',
        iconClass: 'fas fa-minus'
      }
    }
    console.log(timelineEvent);
  }
  ngOnInit() {
    console
      .log('init events');
    this.events = this.eventService.getEvents();
  }
}
interface IconStyleOption {
  background: string;
  iconClass: string;
}

