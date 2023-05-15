import dayjs from 'dayjs';

import RoleEntity from '@modules/roles/entity';

class UserEntity {
  userName = '';

  fullName = '';

  permissions: string[] = [];

  createDateTime?: any;

  updateAt = '';

  role?: RoleEntity;

  avatar?: any;

  phone?: string = '';

  internalComment?: string = '';

  isActive?: boolean = false;

  userType: number = 0;

  createdBy?: string = '';

  username: string = '';

  type?: number;

  roleId: string = '';

  name: string = '';

  gender?: number;

  dob?: dayjs.Dayjs;

  email: string = '';

  phoneNumber: string = '';

  citizenId: string = '';

  countryName: string = '';

  address: string = '';

  id: string = '';

  createdAt: string = '';

  constructor(user?: Partial<UserEntity>) {
    if (!user) {
      return;
    }
    Object.assign(this, user);
    this.dob = user.dob ? dayjs(user.dob) : undefined;
    this.createDateTime = user?.createDateTime ? dayjs(user?.createDateTime) : '';
    this.updateAt = user?.updateAt ? dayjs(user?.createDateTime).format('DD/MM/YYYY HH:mm:ss') : '';
    this.createdAt = user?.createdAt ? dayjs(user?.createdAt).format('DD/MM/YYYY') : '';
  }

  static createArrayUser(arrUser: Array<Partial<UserEntity>>): Array<UserEntity> {
    if (!arrUser) {
      return [];
    }
    return arrUser.map(x => new UserEntity(x));
  }
}

export default UserEntity;
