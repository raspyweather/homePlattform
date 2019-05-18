import { Injectable } from '@angular/core';
import { InventoryItem } from './inventory-list/inventoryItem.interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }
  public getInventoryElements(): InventoryItem[] {
    const str = localStorage.getItem('inventory') || '[]';
    return JSON.parse(str);
  }
  public setInventoryElements(items: InventoryItem[]) {
    localStorage.setItem('inventory', JSON.stringify(items));
  }
}
