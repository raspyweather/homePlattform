import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.interface';
import { DeviceService } from '../device.service';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {

  public recipes: Recipe[] = [];

  constructor(private readonly deviceService: DeviceService,
    private readonly inventoryService: InventoryService) { }

  ngOnInit() {
    const elements = this.inventoryService.getInventoryElements();
    const devices = this.deviceService.getDevices();
    this.recipes.push(
      {
        name: 'Bananenmilchshake',
        ingredients: [
          {
            name: 'Banane',
            quantity: 1,
            unit: 'Stck.',
            available: elements.some(x => x.name.toLowerCase().indexOf('banane') > -1),
          },
          {
            name: 'Milch',
            quantity: 200,
            unit: 'ml',
            available: elements.some(x => x.name.toLowerCase().indexOf('milch') > -1),
          },
          {
            name: 'Vanillinzucker',
            quantity: 1,
            unit: 'Prise',
            available: elements.some(x => x.name.toLowerCase().indexOf('vanillin') > -1),
          }
        ],
        requiredDevices: [{ name: 'Mixer', available: devices.some(device => device.name.toLowerCase().indexOf('mixer') > -1) }],
        preparation: [
          {
            description: 'Banane im Mixer pürieren. Mit Milch auffüllen und mit Vanillinzucker abschmecken.',
          },
          {
            description: 'Alles gut verrühren.',
          },
          {
            description: 'Tipp: Mit Bananeneis schmeckt\'s auch super! Wer\'s nicht allzu süß mag, lässt den Zucker weg und spritzt ein paar Tropfen Zitronensaft dazu.'
          }
        ]
      },
      {
        name: 'Tschunk',
        ingredients: [
          {
            name: 'Mate',
            quantity: 250,
            unit: 'ml',
            available: elements.some(x => x.name.toLowerCase().indexOf('mate') > -1),
          },
          {
            name: 'brauner Rohrzucker',
            quantity: 20,
            unit: 'g',
            available: elements.some(x => x.name.toLowerCase().indexOf('zucker') > -1),
          },
          {
            name: 'Limetten',
            quantity: 1,
            unit: 'Stck.',
            available: elements.some(x => x.name.toLowerCase().indexOf('limette') > -1),
          },
          {
            name: 'Havanna',
            quantity: 4,
            unit: 'cl',
            available: elements.some(x => x.name.toLowerCase().indexOf('havanna') > -1),
          },
          {
            name: 'Eiswürfel',
            quantity: 5,
            unit: 'Stck.',
            available: elements.some(x => x.name.toLowerCase().indexOf('eiswürfel') > -1),
          }
        ],
        preparation: [
          {
            description: 'Limette schneiden'
          },
          {
            description: 'Rohrzucker und Limetten ins ein Glas geben und zerstoßen',
          },
          {
            description: 'Eiswürfel hinzugeben',
          },
          {
            description: 'Havanna und Mate hinzugeben und genießen'
          }
        ]
      });

  }

}
