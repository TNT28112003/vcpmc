import '../styles.scss';

import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSingleAsync } from '@hook/useAsync';
import authenticationPresenter from '@modules/authentication/presenter';
import { useAltaIntl } from '@shared/hook/useTranslate';

import RenderError from '../components/RenderError';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from 'src/firebase/firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const navigate = useNavigate();
  // const { register } = authenticationPresenter;
  // const registerAccount = useSingleAsync(register);
  const [errorStatus, setErrorStatus] = useState('');
  const { formatMessage } = useAltaIntl();
  const onFinishFailed = () => {
    setErrorStatus('');
  };
  const onSubmitAccount = async (values: any) => {
    // registerAccount
    //   ?.execute(values)
    //   .then(() => {
    //     setErrorStatus('');
    //     setTimeout(() => {
    //       navigate('/');
    //     }, 300);
    //   })
    //   .catch(() => {
    //     setErrorStatus(formatMessage('login.account.error'));
    //   });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      const user = userCredential.user;

      // store user data db
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        firstName: values.firstName,
        lastName: values.lastName,
        DoB: values.DoB,
        phone: values.phone,
        displayName: values.username,
        email: values.email,
        rule: values. rule
      });

      console.log(user);
      alert('Register successfully');
      navigate('/login');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="main-form auth-form">
        <h3 className="main-title">{formatMessage('login.title')}</h3>
        <div className="content-form">
          <Form
            name="registerByAccount"
            layout="vertical"
            onFinish={onSubmitAccount}
            onFinishFailed={onFinishFailed}
            requiredMark={false}
          >
            <Form.Item
              label={formatMessage('firstName')}
              name="firstName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('lastName')} />
            </Form.Item>
            <Form.Item
              label={formatMessage('register.fullName')}
              name="lastName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('register.fullName')} />
            </Form.Item>
            <Form.Item
              label={formatMessage('DoB')}
              name="DoB"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('register.fullName')} type='date'/>
            </Form.Item>
            <Form.Item
              label={formatMessage('Phone')}
              name="phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('register.fullName')} />
            </Form.Item>
            <Form.Item
              label={formatMessage('register.fullName')}
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('register.fullName')} />
            </Form.Item>
            <Form.Item
              label={formatMessage('auth.email')}
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('auth.email')} />
            </Form.Item>
            <Form.Item
              label={formatMessage('auth.password')}
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder={formatMessage('auth.password')} />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label={formatMessage('auth.password.confirm')}
              dependencies={['password']}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, passwordConfirm) {
                    if (!passwordConfirm || getFieldValue('password') === passwordConfirm) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error(formatMessage('auth.password.not.match')));
                  },
                }),
              ]}
            >
              <Input.Password placeholder={formatMessage('auth.password.confirm')} />
            </Form.Item>
            <Form.Item
              label={formatMessage('Rule')}
              name="rule"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('register.fullName')} />
            </Form.Item>
            {errorStatus && <RenderError errorStatus={errorStatus} />}
            <Button htmlType="submit" className="normal-button">
              {formatMessage('register.button.account')}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Register;
