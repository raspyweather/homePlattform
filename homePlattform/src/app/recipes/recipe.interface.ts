export interface Recipe {
    name: String;
    ingredients: Ingredient[];
    preparation: Step[];
}

export interface Ingredient {
    quantity: Number;
    unit: String;
    name: String;
}

export interface Step {
    description: String
}