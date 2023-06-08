class UserEntity {
  uid: string = '';
  displayName: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  role: string = '';
  date: string = '';

  constructor(user?: Partial<UserEntity>) {
    if (!user) {
      return;
    }
    Object.assign(this, user);
  }
}

export default UserEntity;
