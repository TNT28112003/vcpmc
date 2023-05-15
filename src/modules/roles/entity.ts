class RoleEntity {
  id?: string;

  code?: string;

  name?: string;

  numberOfAssign?: number;

  permissions: string[] = [];

  constructor(role?: any) {
    if (!role) {
      return;
    }
    Object.assign(this, role);
  }

  static createListRole(listRole: Array<any>) {
    if (!Array.isArray(listRole)) {
      return [];
    }
    return listRole.map((Role: RoleEntity) => {
      return new RoleEntity(Role);
    });
  }
}

export default RoleEntity;
