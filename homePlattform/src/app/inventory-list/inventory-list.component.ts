import { Component, OnInit } from '@angular/core';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { inventoryItem } from './inventoryItem.interface';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  public inventoryElements: inventoryItem[] = [];
  public formProductName = '';
  public formProductPrice = 0.00;
  public formProductBestBefore = moment().locale('de').locale('de').format('DD-MM-YYYY');

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    let inventoryListJsonString = '';
    if (localStorage.getItem('inventoryList') !== null) {
      inventoryListJsonString = localStorage.getItem('inventoryList');
      const inventoryListObject = JSON.parse(inventoryListJsonString);
      this.inventoryElements.unshift(...inventoryListObject.inventory);
    }
    this.inventoryElements.unshift({ name: 'Apple Loopies', price: 1.99, bestBefore: '30-07-2020', addedAt: '18. Mai 2019 um 08:00 Uhr' });
    this.route.params.subscribe((param) => {
      if ('fromScan' in param) {
        this.addReceiptItems();
      }
    });
    // document.getElementById("inventoryList").classList.add("useAnimations");
  }

  public addReceiptItems() {
    this.inventoryElements.unshift(...[
      { name: 'Müllermilch', price: 0.59, bestBefore: '06-06-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Tortilla Chips', price: 0.89, bestBefore: '10-01-20', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Salzstangen JA!', price: 0.39, bestBefore: '10-08-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Pepper Cola', price: 1.19, bestBefore: '02-12-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Vio Limo Zitrone', price: 1.49, bestBefore: '30-09-19', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') },
      { name: 'Pfanner pure tea', price: 0.99, bestBefore: '11-04-20', addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]') }]);
  }

  addReceiptItemManually() {
    const inventoryItem: inventoryItem =
    {
      name: this.formProductName,
      price: this.formProductPrice,
      bestBefore: this.formProductBestBefore,
      addedAt: moment().locale('de').format('Do MMMM YYYY [um] hh:mm [Uhr]')
    };
    this.inventoryElements.unshift(inventoryItem);
    this.appendInventoryItemToLocalStorage(inventoryItem);
    this.resetFormFields();
  }

  removeInventoryItem(idx: number) {
    const inventoryItemToBeRemoved = this.inventoryElements.filter((x, i) => i === idx);
    this.removeInventoryItemFromLocalStorage(inventoryItemToBeRemoved[0]);
    this.inventoryElements = this.inventoryElements.filter((x, i) => i !== idx);
  }

  removeInventoryItemFromLocalStorage(inventoryItem: inventoryItem) {
    let inventoryListJsonString = '';
    let inventoryListObject = { inventory: [] };

    if (localStorage.getItem('inventoryList') !== null) {
      inventoryListJsonString = localStorage.getItem('inventoryList');
      inventoryListObject = JSON.parse(inventoryListJsonString);
    } else {
      inventoryListObject = { inventory: [] };
    }

    inventoryListObject.inventory = inventoryListObject.inventory.filter((x, i) => x !== inventoryItem);
    inventoryListJsonString = JSON.stringify(inventoryListObject);

    localStorage.setItem('inventoryList', inventoryListJsonString);
  }

  appendInventoryItemToLocalStorage(inventoryItem: inventoryItem) {
    let inventoryListJsonString = '';
    let inventoryListObject = { inventory: [] };

    if (localStorage.getItem('inventoryList') !== null) {
      inventoryListJsonString = localStorage.getItem('inventoryList');
      inventoryListObject = JSON.parse(inventoryListJsonString);
    } else {
      inventoryListObject = { inventory: [] };
    }

    inventoryListObject.inventory.push(inventoryItem);
    inventoryListJsonString = JSON.stringify(inventoryListObject);

    localStorage.setItem('inventoryList', inventoryListJsonString);
  }



  resetFormFields() {
    this.formProductName = '';
    this.formProductPrice = 0.00;
    this.formProductBestBefore = '';
  }

  clickTestButton() {
    alert('It works');
  }
}
