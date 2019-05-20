import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-list/inventoryItem.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit {
  constructor(private readonly inventoryService: InventoryService,
    private readonly router: Router) { }
  public items: CardItem[];
  accept() {
    this.items[this.items.length - 1].state = 'liked';
    setTimeout(() => {
      this.items.pop();
      if (this.items.length === 0) {
        this.router.navigateByUrl('..');
      }
    }, 500);
  }
  decline() {
    this.items[this.items.length - 1].state = 'unliked';
    setTimeout(() => {
      this.items.pop();
      if (this.items.length === 0) {
        this.router.navigateByUrl('..');
      }
    }, 500);
  }
  ngOnInit() {
    this.items = this.inventoryService.getInventoryElements()
      .filter(item => item.imageUrl !== undefined)
      .map(item => {
        return { state: 'unset', item } as CardItem;
      });
    if (this.items.length === 0) {
      this.router.navigateByUrl('..');
    }
    console.log(this.items);
  }
}
interface CardItem {
  state: 'liked' | 'unliked' | 'unset';
  item: InventoryItem;
}
