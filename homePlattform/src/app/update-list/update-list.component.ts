import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-list/inventoryItem.interface';


@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit {


  constructor(private readonly inventoryService: InventoryService) { }
  public items: CardItem[];
  accept() {
    this.items[this.items.length - 1].state = 'liked';
    setTimeout(() => this.items.pop(), 1000);
  }
  decline() {
    this.items[this.items.length - 1].state = 'unliked';
    setTimeout(() => this.items.pop(), 1000);
  }
  ngOnInit() {
    this.items = this.inventoryService.getInventoryElements()
    .filter(item=>item.imageUrl!==undefined)
    .map(item => {
      return { state: 'unset', item } as CardItem;
    });
    console.log(this.items);
  }
}
interface CardItem {
  state: 'liked' | 'unliked' | 'unset';
  item: InventoryItem;
}
