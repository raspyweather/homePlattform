export interface smartDevice{
    name: String;
    currentEnergyConsumption: Number;
    type: SmartDeviceType;
}

export enum SmartDeviceType {
    SmartPlug = "Smarte Steckdose",
}