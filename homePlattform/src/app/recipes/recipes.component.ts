import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {

  public recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
    this.recipes.push(
      {
        name: "Bananenmilchshake",
        ingredients: [
          {
            name: "Banane",
            quantity: 1,
            unit: "Stck."
          },
          {
            name: "Milch",
            quantity: 200,
            unit: "ml"
          },
          {
            name: "Vanillinzucker",
            quantity: 1,
            unit: "Prise"
          }
        ],
        preparation: [
          {
            description: "Banane im Mixer pürieren. Mit Milch auffüllen und mit Vanillinzucker abschmecken.",
          },
          {
            description: "Alles gut verrühren.",
          },
          {
            description: "Tipp: Mit Bananeneis schmeckt\'s auch super! Wer's nicht allzu süß mag, lässt den Zucker weg und spritzt ein paar Tropfen Zitronensaft dazu."
          }
        ]
      })
  }

}