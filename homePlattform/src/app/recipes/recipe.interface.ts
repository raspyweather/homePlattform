export interface Recipe {
    name: string;
    ingredients: IngredientStatus[];
    preparation: Step[];
    requiredDevices?: { name: string, available: boolean }[];
}
export interface Ingredient {
    quantity: number;
    unit: string;
    name: string;
}
export declare type IngredientStatus = Ingredient | { available: boolean };

export interface Step {
    description: string;
}