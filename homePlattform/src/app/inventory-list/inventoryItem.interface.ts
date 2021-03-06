export interface InventoryItem {
    name: string;
    price: number;
    bestBefore: string;
    addedAt: string;
    imageUrl?: string;
    userCheckRecommended?: boolean;
}
