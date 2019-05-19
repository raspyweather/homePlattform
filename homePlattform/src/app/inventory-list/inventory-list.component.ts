import { Component, OnInit } from '@angular/core';
import { InventoryItem } from './inventoryItem.interface';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { InventoryService } from '../inventory.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  public formProductName = '';
  public formProductPrice = 0.00;

  public items: InventoryItem[];
  public showForm = false;
  public formProductBestBefore = moment().locale('de').locale('de').format('DD-MM-YYYY');

  constructor(private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private readonly inventoryService: InventoryService) {

  }

  ngOnInit() {
    const inventoryListJsonString = '';
    this.items = this.inventoryService.getInventoryElements();
    if (this.items.length === 0) {
      [
        { name: 'Apple Loopies', price: 1.99, bestBefore: '19-07-20', addedAt: '1. Mai 2019 um 08:00 Uhr' },
        {
          name: 'Bio-Bananen, 5 Stück', price: 1.99, bestBefore: '30-09-20', addedAt: '6. Mai 2019 um 08:00 Uhr', userCheckRecommended: true,
          imageUrl: 'https://www.kochschule.de/sites/default/files/images/kochwissen/440/banane.jpg'
        },
        {
          name: 'RAUCH Happy Day 100% Apfel Apfelsaft 2L', price: 1.99,
          bestBefore: '14-07-20', addedAt: '12. Mai 2019 um 08:00 Uhr',
          userCheckRecommended: true, imageUrl: 'https://files.billa.at/files/artikel/00-400975_01__600x600.jpg'
        },
        { name: 'Württemberg Trollinger mit Lemberger QbA halbtrocken, Rotwein 2017', price: 1.99, bestBefore: '30-07-20', addedAt: '12. Mai 2019 um 08:00 Uhr', userCheckRecommended: true, imageUrl: 'https://www.lidl.de/media/product/0/2/4/8/3/1/5/wuerttemberg-trollinger-mit-lemberger-qba-halbtrocken-rotwein-2017--1.jpg' }
      ].forEach(item => this.insertInventoryItem(item));
      console.log(this.items);
    }
    this.route.params.subscribe((param) => {
      if (param.fromScan !== undefined) {
        console.log(param.fromScan);
        this.addReceiptItems();
      }
    });

  }

  public addReceiptItems() {
    [
      { name: 'Pfanner pure tea', price: 0.99, bestBefore: '11-04-20', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Vio Limo Zitrone', price: 1.49, bestBefore: '30-09-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Pepper Cola', price: 1.19, bestBefore: '02-12-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Salzstangen JA!', price: 0.39, bestBefore: '10-08-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Tortilla Chips', price: 0.89, bestBefore: '10-01-20', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Müllermilch', price: 0.59, bestBefore: '06-06-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') }
    ].forEach(item => this.insertInventoryItem(item));
    this.eventService.addEvent({
      action: 'ScanReceipt',
      title: 'Einkauf bei REWE erfolgreich gescannt',
      description: 'Dem Inventar wurden 6 Einträge hinzugefügt',
      eventDate: moment().toISOString(),
      source: 'Inventory'
    });
  }

  addReceiptItemManually() {
    const inventoryItem: InventoryItem = {
      name: this.formProductName,
      price: this.formProductPrice,
      bestBefore: this.formProductBestBefore,
      addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]')
    };
    this.insertInventoryItem(inventoryItem);
    this.resetFormFields();
    this.eventService.addEvent({
      action: 'Add',
      title: inventoryItem.name + ' wurde manuell hinzugefügt.',
      eventDate: moment().toISOString(),
      source: 'Inventory',
      sourceDetail: inventoryItem
    });
  }

  removeInventoryItem(inventoryItem: number) {
    const itemToRemove = this.items[inventoryItem];
    this.eventService.addEvent({
      action: 'Remove',
      eventDate: moment().toISOString(),
      source: 'Inventory',
      title: itemToRemove.name + ' wurde verbraucht',
      sourceDetail: itemToRemove
    })
    this.items = this.items.filter((x, i) => i !== inventoryItem);
    this.inventoryService.setInventoryElements(this.items);
  }

  insertInventoryItem(inventoryItem: InventoryItem) {
    this.items.unshift(inventoryItem);
    this.inventoryService.setInventoryElements(this.items);
  }

  resetFormFields() {
    this.formProductName = '';
    this.formProductPrice = 0.00;
    this.formProductBestBefore = '';
    this.showForm = false;
  }

}