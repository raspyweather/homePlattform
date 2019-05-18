import { Component, OnInit } from '@angular/core';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { inventoryItem } from './inventoryItem.interface';
import { ActivatedRoute } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  public inventoryElements: inventoryItem[] = [];
  public formProductName = '';
  public formProductPrice = 0.00;
  public formProductBestBefore = moment().locale("de").locale("de").format("DD-MM-YYYY");

  constructor(private readonly route:ActivatedRoute) { }

  ngOnInit() {
    let inventoryListJsonString = '';
    if (localStorage.getItem('inventoryList') != null) {
      inventoryListJsonString = localStorage.getItem('inventoryList');
      const inventoryListObject = JSON.parse(inventoryListJsonString);
      this.inventoryElements.push(...inventoryListObject['inventory']);
    }
    this.route.params.subscribe((param)=>{
      if ('fromScan' in param) {
        this.addReceiptItems()
      }
    })
  }

  public addReceiptItems() {
    this.inventoryElements.push(...[{ name: 'Müllermilch', price: 0.59, bestBefore: '06-06-19', addedAt: moment().locale("de").format('Do MMMM YYYY [um] h:mm') },
    { name: 'Tortilla Chips', price: 0.89, bestBefore: '10-01-20', addedAt: moment().locale("de").format('Do MMMM YYYY [um] h:mm')  },
    { name: 'Salzstangen JA!', price: 0.39, bestBefore: '10-08-19', addedAt: moment().locale("de").format('Do MMMM YYYY [um] h:mm')  },
    { name: 'Pepper Cola', price: 1.19, bestBefore: '02-12-19', addedAt: moment().locale("de").format('Do MMMM YYYY [um] h:mm')  },
    { name: 'Vio Limo Zitrone', price: 1.49, bestBefore: '30-09-19', addedAt: moment().locale("de").format('Do MMMM YYYY [um] h:mm')  },
    { name: 'Pfanner pure tea', price: 0.99, bestBefore: '11-04-20', addedAt: moment().locale("de").format('Do MMMM YYYY [um] h:mm')  }]);
  }

  addReceiptItemManually() {
    const inventoryItem: inventoryItem = { name: this.formProductName, price: this.formProductPrice, bestBefore: this.formProductBestBefore, addedAt: moment().locale("de").format('Do MMMM YYYY [um] hh:mm') };
    this.inventoryElements.push(inventoryItem);
    this.appendInventoryItemToLocalStorage(inventoryItem);
    this.resetFormFields();
  }

  appendInventoryItemToLocalStorage(inventoryItem: inventoryItem) {
    let inventoryListJsonString = '';
    let inventoryListObject = { inventory: [] };

    if (localStorage.getItem('inventoryList') != null) {
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
