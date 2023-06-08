class DeviceEntity {
  id: string = '';
  SKU: string = '';
  deviceName: string = '';
  label: string = '';
  IPAddress: string = '';
  information: string = '';
  userName: string = '';
  password: string = '';
  note: string = '';
  warrantyPeriod: string = '';
  location: string = '';
  status: number = 1;

  constructor(device?: Partial<DeviceEntity>) {
    if (!device) {
      return;
    }
    Object.assign(this, device);
  }
}

export default DeviceEntity;
