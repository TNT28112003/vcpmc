import store from '@core/store/redux';
import { removeProfile, setToken } from './profileStore';
import authenticationRepository, { ILoginDTO } from './repository';

const authenticationPresenter = { ...authenticationRepository };

authenticationPresenter.login = async (payload: ILoginDTO, remember = false) => {
  const res = await authenticationRepository.login(payload);
  store.dispatch(setToken({ token: res?.user?.accessToken, remember }));
  return res?.user?.accessToken;
};

authenticationPresenter.logout = async () => {
  const res = await authenticationRepository.logout();
  store.dispatch(removeProfile());
  return res;
};

export default authenticationPresenter;
