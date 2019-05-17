import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  public inventoryElements = []

  constructor() { }

  public addReceiptItems() {
    this.inventoryElements.push(...[{ name: 'Müllermilch', price: 0.59, bestBefore: '06-06-19' },
    { name: 'Tortilla Chips', price: 0.89, bestBefore: '10-01-20' },
    { name: 'Salzstangen JA!', price: 0.39, bestBefore: '10-08-19' },
    { name: 'Pepper Cola', price: 1.19, bestBefore: '02-12-19' },
    { name: 'Vio Limo Zitrone', price: 1.49, bestBefore: '30-09-19' },
    { name: 'Pfanner pure tea', price: 0.99, bestBefore: '11-04-20' }]);
  }

  clickTestButton() {
    alert("It works");
  }

  ngOnInit() {
  }

}
