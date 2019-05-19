import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanReceiptComponent } from './scan-receipt/scan-receipt.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { HomeComponent } from './home/home.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { DevicesComponent } from './devices/devices.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [{
  component: ScanReceiptComponent,
  path: 'scanner'
},

{
  component: InventoryListComponent,
  path: 'inventory'
},
{
  component: InventoryListComponent,
  path: 'inventory/:fromScan'
},
{

  component: UpdateListComponent,
  path: 'inventory-update'
},
{
  component: DevicesComponent,
  path: 'devices'
},
{
  component: TimelineComponent,
  path: 'timeline'
},
{
  component: RecipesComponent,
  path: 'recipes'
},{
  component: HomeComponent,
  path: '**'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
