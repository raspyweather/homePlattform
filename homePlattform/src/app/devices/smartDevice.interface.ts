export interface smartDevice{
    name: String;
    associatedDevice: String;
    currentEnergyConsumption: Number;
    type: SmartDeviceType;
}

export enum SmartDeviceType {
    SmartPlug = "Smarte Steckdose",
}