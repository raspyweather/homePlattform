import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ScanReceiptComponent } from './scan-receipt/scan-receipt.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  component: ScanReceiptComponent,
  path: 'scanner'
},
{
  component: HomeComponent,
  path: ''
},
{
  component: InventoryListComponent,
  path: 'inventory'
},
{
  component: InventoryListComponent,
  path: 'inventory/:fromScan'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
