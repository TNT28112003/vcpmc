import ButtonForm from '@shared/components/ButtonForm';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { Col, Form, Input, Row, notification } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import AvatarUser from './components/AvatarUser';
import ModalChangePassWord from './components/ModalChangePassWord';
import './style.scss';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import authenticationPresenter from '@modules/authentication/presenter';
import { useSingleAsync } from '@hook/useAsync';
import { auth } from 'src/firebase/firebase.config';
import UserEntity from '@modules/authentication/entity';

const Profile = () => {
  const [form] = Form.useForm();
  const { formatMessage } = useAltaIntl();
  const [isDisableForm, setIsDisableForm] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState<UserEntity>();
  const id = auth.currentUser?.uid;
  const chooseFile = (file: any) => {
    form.setFieldsValue({ avatar: file });
  };
  const [api, contextHolder] = notification.useNotification();
  const { getProfile, updateProfile } = authenticationPresenter;
  const getSingleUser = useSingleAsync(getProfile);
  const changeNewUser = useSingleAsync(updateProfile);
  const [userDataEdit, setUserDataEdit] = useState({
    uid: '',
    firstName: '',
    lastName: '',
    date: '',
    phone: '',
    email: '',
    displayName: '',
    role: '',
  });

  const { logout } = authenticationPresenter;
  const logoutCurrentAuth = useSingleAsync(logout);

  const SignOut = () => {
    logoutCurrentAuth.execute().then(response => console.log(response));
  };

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'profile.edit',
      handleAction: () => setIsDisableForm(false),
    },
    {
      iconType: 'key',
      name: 'common.change.password',
      handleAction: () => setIsVisible(true),
    },
    {
      iconType: 'logOut',
      name: 'login.logout',
      handleAction: () => SignOut(),
    },
  ];

  const successNotification = (description: string) => {
    api.success({
      message: 'SUCESS',
      description: description,
      placement: 'top',
    });
  };

  const errorNotification = (description: string) => {
    api.error({
      message: 'ERROR',
      description: description,
      placement: 'top',
    });
  };

  useEffect(() => {
    getSingleUser
      .execute(id)
      .then(response => {
        setUser(response.data);
      })
      .catch((err: any) => {
        errorNotification(err.message);
      });
  }, []);

  const handleEditUser = () => {
    changeNewUser
      .execute(id, userDataEdit)
      .then(response => {
        if (response.status) {
          successNotification('Cập nhật thành công');
        }
      })
      .catch(err => {
        errorNotification(err.message);
      });
  };

  return (
    <div className="profile-page">
      {contextHolder}
      <div className="mb-[20px]">
        <MainTitleComponent title="customer.information" />
      </div>
      <div className="main-component">
        <div className="profile-user__box pb-[30px]">
          <Row className="profile-form__box">
            <Col span={7}>
              <div className="profile-avatar">
                <AvatarUser chooseFile={chooseFile} disabled={isDisableForm} />
                <br />
                <div className="text-center">
                  <p className="block text-white text-[20px] font-semibold leading-[0.2%]">
                    {user?.firstName + ' ' + user?.lastName}
                  </p>
                </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="main-form">
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <div className="mt-[20px] mb-[12px]">
                      <h3 className="text-white font-semibold">
                        Họ: <span className="text-[#FF4747]">*</span>
                      </h3>
                    </div>
                    <Input
                      disabled={isDisableForm}
                      placeholder={formatMessage('users.fullName')}
                      maxLength={256}
                      value={user?.firstName}
                      onChange={event =>
                        setUserDataEdit(prev => ({ ...prev, firstName: event.target.value }))
                      }
                    />
                  </Col>
                  <Col span={12}>
                    <div className="mt-[20px] mb-[12px]">
                      <h3 className="text-white font-semibold">
                        Tên: <span className="text-[#FF4747]">*</span>
                      </h3>
                    </div>
                    <Input
                      disabled={isDisableForm}
                      placeholder={formatMessage('users.fullName')}
                      maxLength={256}
                      value={user?.lastName}
                      onChange={event =>
                        setUserDataEdit(prev => ({ ...prev, lastName: event.target.value }))
                      }
                    />
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <div className="mt-[20px] mb-[12px]">
                      <h3 className="text-white font-semibold">
                        Ngày sinh: <span className="text-[#FF4747]">*</span>
                      </h3>
                    </div>
                    <Input
                      disabled={isDisableForm}
                      placeholder={formatMessage('users.fullName')}
                      maxLength={256}
                      value={user?.date}
                      onChange={event =>
                        setUserDataEdit(prev => ({ ...prev, date: event.target.value }))
                      }
                    />
                  </Col>
                  <Col span={12}>
                    <div className="mt-[20px] mb-[12px]">
                      <h3 className="text-white font-semibold">
                        Số điện thoại: <span className="text-[#FF4747]">*</span>
                      </h3>
                    </div>
                    <Input
                      disabled={isDisableForm}
                      placeholder={formatMessage('users.fullName')}
                      maxLength={256}
                      value={user?.phone}
                      onChange={event =>
                        setUserDataEdit(prev => ({ ...prev, phone: event.target.value }))
                      }
                    />
                  </Col>
                </Row>
                <div className="mt-[20px] mb-[12px]">
                  <h3 className="text-white font-semibold">
                    Email: <span className="text-[#FF4747]">*</span>
                  </h3>
                </div>
                <Input
                  disabled={true}
                  placeholder={formatMessage('users.email')}
                  maxLength={256}
                  value={user?.email}
                />
                <div className="mt-[20px] mb-[12px]">
                  <h3 className="text-white font-semibold">
                    Tên đăng nhập: <span className="text-[#FF4747]">*</span>
                  </h3>
                </div>
                <Input
                  disabled={true}
                  placeholder={formatMessage('users.fullName')}
                  maxLength={256}
                  value={user?.displayName}
                />
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <div className="mt-[20px] mb-[12px]">
                      <h3 className="text-white font-semibold">
                        Phân quyền: <span className="text-[#FF4747]">*</span>
                      </h3>
                    </div>
                    <Input
                      disabled={true}
                      placeholder={formatMessage('users.fullName')}
                      maxLength={256}
                      value={user?.role}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        {isDisableForm == false && (
          <ButtonForm
            formName="profile-form"
            nameButtonSubmit={'common.update'}
            onCancelForm={() => {
              setIsDisableForm(true);
              // form.setFieldsValue(user);
            }}
            onOkForm={() => form.submit()}
          />
        )}
      </div>

      <RightMenu arrayAction={arrayAction} />
      <ModalChangePassWord isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default Profile;
