export interface SmartDevice {
    name: string;
    associatedDevice: string;
    currentEnergyConsumption: number;
    type: SmartDeviceType;
    addedAt: string;
}

export enum SmartDeviceType {
    SmartPlug = "Smarte Steckdose",
}