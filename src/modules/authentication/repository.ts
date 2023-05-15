import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { fbRepositorires } from 'src/firebase/firebase.auth';

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

const getProfile = () => {};

const updateProfile = (payload: any) => {};

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
