import dayjs from 'dayjs';

import LocationsEntity from '@modules/locations/locationsEntity';

class DevicesEntity {
  code: string = '';

  name: string = '';

  type?: number;

  madeIn: string = '';

  description: string = '';

  locationId: string = '';

  location?: LocationsEntity;

  lastAccessAt: string = '';

  activeStatus?: number;

  batteryCapacity?: number;

  containerStatus?: any;

  numberOfHits?: number;

  validAmount?: number;

  invalidAmount?: number;

  createdAt: string = '';

  constructor(devices: Partial<DevicesEntity>) {
    if (!devices) {
      return;
    }
    Object.assign(this, devices);
    // convert entity type here

    this.createdAt = devices.createdAt ? dayjs(devices.createdAt).format('DD/MM/YYYY') : '';
  }

  static createListDevices(listDevices: Array<Partial<DevicesEntity>>) {
    if (!Array.isArray(listDevices)) {
      return [];
    }
    return listDevices.map((devices: Partial<DevicesEntity>) => {
      return new DevicesEntity(devices);
    });
  }
}
export default DevicesEntity;
