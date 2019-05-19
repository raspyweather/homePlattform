import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  LOCAL_STORAGE_KEY = 'eventList';

  constructor() { }

  public addEvent(newEvent: TimelineEvent) {
    this.setEvents([newEvent, ...this.getEvents()]);
  }
  public getEvents(): TimelineEvent[] {
    const str = localStorage.getItem(this.LOCAL_STORAGE_KEY) || '[]';
    return JSON.parse(str);
  }
  public setEvents(events: TimelineEvent[]) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(events));
  }

}

export interface TimelineEvent {
  title: string;
  eventDate: string;
  source: 'Inventory' | 'Device';
  action: 'Add' | 'Remove' | 'Expired' | 'ScanReceipt';
  sourceDetail?: any;
  description?: string;

}