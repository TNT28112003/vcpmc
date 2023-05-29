import { RootState } from '@modules';
import ButtonForm from '@shared/components/ButtonForm';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { Col, Form, Input, Row } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AvatarUser from './components/AvatarUser';
import ModalChangePassWord from './components/ModalChangePassWord';
import './style.scss';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import authenticationPresenter from '@modules/authentication/presenter';
import { useSingleAsync } from '@hook/useAsync';
import { DocumentData, QuerySnapshot, collection, onSnapshot } from 'firebase/firestore';
import { FirebaseConfig } from 'src/firebase/firebase.config';

const Profile = () => {
  const db = FirebaseConfig.getInstance().fbDB;
  const [form] = Form.useForm();
  const { formatMessage } = useAltaIntl();
  const [isDisableForm, setIsDisableForm] = useState(true);
  const { user } = useSelector((state: RootState) => state.profile);
  const [isVisible, setIsVisible] = useState(false);

  interface UserType {
    id?: string;
    firstName?: string;
    lastName?: string;
    // date: string;
    phone?: string;
    email?: string;
    displayName?: string;
    role?: string;
  }

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

  const [userProfile, setUserProfile] = useState<UserType[]>([]);

  console.log('====================================');
  console.log(user);
  console.log('====================================');

  useEffect(() => {
    if (user != null) {
      setIsDisableForm(true);
      form.setFieldsValue(user);
    }
  }, [form, user]);

  const chooseFile = (file: any) => {
    form.setFieldsValue({ avatar: file });
  };

  const onUpdateProfile = () => {};

  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, 'users'), (snapshot: QuerySnapshot<DocumentData>) => {
  //       setUserProfile(
  //         snapshot.docs.map(doc => {
  //           return {
  //             id: doc.id,
  //             ...doc.data(),
  //           };
  //         }),
  //       );
  //     }),
  //   [],
  // );

  // console.log('====================================');
  // console.log(userProfile);
  // console.log('====================================');

  return (
    <div className="profile-page">
      <div className="mb-[20px]">
        <MainTitleComponent title="customer.information" />
      </div>
      <div className="main-component">
        <div className="profile-user__box">
          <Form
            className="main-form"
            name="userProfileForm"
            initialValues={user}
            layout="vertical"
            requiredMark={false}
            form={form}
            onFinish={onUpdateProfile}
            onResetCapture={() => {
              setIsDisableForm(true);
            }}
            id="userProfileForm"
            disabled={isDisableForm}
          >
            <Row className="profile-form__box">
              <Col span={7}>
                <div className="profile-avatar">
                  <AvatarUser chooseFile={chooseFile} disabled={isDisableForm} />
                  <br />
                  <div className="text-center">
                    <p className="block text-white text-[20px] font-semibold leading-[0.2%]">
                      {userProfile[0]?.firstName + ' ' + userProfile[0]?.lastName}
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div className="main-form">
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Form.Item
                        label={formatMessage('Họ')}
                        name="firstName"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder={formatMessage('users.fullName')} maxLength={256} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={formatMessage('Tên')}
                        name="lastName"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder={formatMessage('users.fullName')} maxLength={256} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Form.Item
                        label={formatMessage('Ngày sinh')}
                        name="DoB"
                        rules={[{ required: true }]}
                      >
                        <Input
                          placeholder={formatMessage('users.fullName')}
                          value={userProfile[0]?.firstName}
                          maxLength={256}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={formatMessage('Số điện thoại')}
                        name="phone"
                        rules={[{ required: true }]}
                      >
                        <Input
                          placeholder={formatMessage('users.fullName')}
                          value={userProfile[0]?.displayName}
                          maxLength={256}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item label={formatMessage('users.email')} name="email">
                    <Input placeholder={formatMessage('users.email')} maxLength={256} />
                  </Form.Item>
                  <Form.Item label={formatMessage('Tên đăng nhập')} name="displayName">
                    <Input placeholder={formatMessage('users.fullName')} maxLength={256} />
                  </Form.Item>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Form.Item
                        label={formatMessage('Phân quyền')}
                        name="role"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder={formatMessage('users.fullName')} maxLength={256} />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Form>
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
