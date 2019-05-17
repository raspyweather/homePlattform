import { Component, OnInit } from '@angular/core';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { inventoryItem } from './inventoryItem.interface';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  public inventoryElements: inventoryItem[] = [];
  public formProductName = "";
  public formProductPrice = 0.00;
  public formProductBestBefore = "01-01-1970";

  constructor() { }

  ngOnInit() {
    let inventoryListJsonString = "";
    if (localStorage.getItem("inventoryList") != null) {
      inventoryListJsonString = localStorage.getItem("inventoryList");
      let inventoryListObject = JSON.parse(inventoryListJsonString);
      this.inventoryElements.push(...inventoryListObject["inventory"]);
    }

  }

  public addReceiptItems() {
    this.inventoryElements.push(...[{ name: 'Müllermilch', price: 0.59, bestBefore: '06-06-19' },
    { name: 'Tortilla Chips', price: 0.89, bestBefore: '10-01-20' },
    { name: 'Salzstangen JA!', price: 0.39, bestBefore: '10-08-19' },
    { name: 'Pepper Cola', price: 1.19, bestBefore: '02-12-19' },
    { name: 'Vio Limo Zitrone', price: 1.49, bestBefore: '30-09-19' },
    { name: 'Pfanner pure tea', price: 0.99, bestBefore: '11-04-20' }]);
  }

  addReceiptItemManually() {
    let inventoryItem: inventoryItem = { name: this.formProductName, price: this.formProductPrice, bestBefore: this.formProductBestBefore }
    this.inventoryElements.push(inventoryItem)
    this.appendInventoryItemToLocalStorage(inventoryItem);
    this.resetFormFields();
  }

  appendInventoryItemToLocalStorage(inventoryItem: inventoryItem) {
    let inventoryListJsonString = "";
    let inventoryListObject = {};

    if (localStorage.getItem("inventoryList") != null) {
      inventoryListJsonString = localStorage.getItem("inventoryList");
      inventoryListObject = JSON.parse(inventoryListJsonString);
    } else {
      inventoryListObject = {'inventory': []}
    }

    inventoryListObject['inventory'].push(inventoryItem);
    inventoryListJsonString = JSON.stringify(inventoryListObject);

    localStorage.setItem("inventoryList", inventoryListJsonString);
  }

  resetFormFields() {
    this.formProductName = "";
    this.formProductPrice = 0.00;
    this.formProductBestBefore = "";
  }

  clickTestButton() {
    alert("It works");
  }
}
