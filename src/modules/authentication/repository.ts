import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { fbRepositorires } from 'src/firebase/firebase.auth';
import { changeData, getSingleData } from 'src/firebase/firebase.fbServices';
import UserEntity from './entity';

const collection = 'users';

const register = (payload: any) => {};

const forgotPassword = (payload: any) => {
  return fbRepositorires.execute({
    asyncFunction: sendPasswordResetEmail,
    payload: payload,
  });
};

const CheckRecoveryToken = (payload: string) => {};

const updatePassword = (payload: any) => {};

export interface ILoginDTO {
  userName: string;
  password: string;
}

const login = (payload: ILoginDTO) => {
  return fbRepositorires.execute({
    asyncFunction: signInWithEmailAndPassword,
    payload: payload,
  });
};

const logout = () => {
  return fbRepositorires.execute({
    asyncFunction: signOut,
  });
};

const resetPassword = (payload: any) => {};

const getProfile = (documentId: string): Promise<{ data: UserEntity; status: boolean }> => {
  return getSingleData(collection, documentId);
};

const updateProfile = (
  documentId: string,
  data: Partial<UserEntity>,
): Promise<{ status: boolean }> => {
  return changeData(collection, documentId, data);
};

const updateProfileChangePassword = (payload: any) => {};

const uploadAvatar = (payload: any) => {};

const updateProfileUser = (id: any, payload: any) => {};

export default {
  register,
  login,
  logout,
  resetPassword,
  forgotPassword,
  CheckRecoveryToken,
  updatePassword,
  getProfile,
  uploadAvatar,
  updateProfile,
  updateProfileUser,
  updateProfileChangePassword,
};
