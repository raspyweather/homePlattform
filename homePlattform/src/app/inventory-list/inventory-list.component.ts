import { Component, OnInit } from '@angular/core';
import { InventoryItem } from './inventoryItem.interface';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { InventoryService } from '../inventory.service';

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
    private readonly inventoryService: InventoryService) { }

  ngOnInit() {
    const inventoryListJsonString = '';
    this.items = this.inventoryService.getInventoryElements();
    if (this.items.length === 0) {
      this.insertInventoryItem(
        {
          name: 'Apple Loopies',
          price: 1.99,
          bestBefore: '30-07-2020',
          addedAt: '18. Mai 2019 um 08:00 Uhr'
        });
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
      { name: 'Müllermilch', price: 0.59, bestBefore: '06-06-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Tortilla Chips', price: 0.89, bestBefore: '10-01-20', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Salzstangen JA!', price: 0.39, bestBefore: '10-08-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Pepper Cola', price: 1.19, bestBefore: '02-12-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Vio Limo Zitrone', price: 1.49, bestBefore: '30-09-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Pfanner pure tea', price: 0.99, bestBefore: '11-04-20', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') }
    ].forEach(item => this.insertInventoryItem(item));
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
  }

  removeInventoryItem(inventoryItem: number) {
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

  clickTestButton() {
    alert('It works');
  }
}
