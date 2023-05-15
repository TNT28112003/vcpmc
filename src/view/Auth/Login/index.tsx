import '../styles.scss';

import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logo } from '@assets/images';
import { useSingleAsync } from '@hook/useAsync';
import { useAltaIntl } from '@hook/useTranslate';
import authenticationPresenter from '@modules/authentication/presenter';

import RenderError from '../components/RenderError';
import ChangeLanguage from '@shared/components/ChangeLanguage';

const Login = () => {
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();
  const { login } = authenticationPresenter;
  const loginByAccount = useSingleAsync(login);
  const [errorStatus, setErrorStatus] = useState('');

  const onFinishFailed = () => {
    setErrorStatus('');
  };
  const onSubmitAccount = (values: any) => {
    if (values.remember) {
      window.localStorage.setItem('remember-me', '1');
    } else {
      window.localStorage.removeItem('remember-me');
      window.sessionStorage.setItem('remember-me', '1');
    }
    document.cookie = `remember_me=${true}; SameSite=None; Secure`;
    loginByAccount
      ?.execute(values)
      ?.then(() => {
        setErrorStatus('');
        alert('Login successful');
        setTimeout(() => {
          navigate('/');
        }, 300);
      })
      .catch(err => {
        setErrorStatus(formatMessage('login.account.error'));
      });
  };

  return (
    <>
      <div className="change_language">
        <ChangeLanguage />
      </div>
      <div className="main-form auth-form">
        <div className="mt-12">
          <img
            src={logo}
            className="logo"
            onClick={() => {
              navigate('/login');
            }}
          />
        </div>
        <div className="content-form">
          <h3 className="main-title">{formatMessage('login.title')}</h3>
          <Form
            name="loginByAccount"
            layout="vertical"
            onFinish={onSubmitAccount}
            onFinishFailed={onFinishFailed}
            requiredMark={false}
            initialValues={{
              remember: false,
            }}
          >
            <Form.Item
              label={formatMessage('login.email')}
              name="userName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('login.email')} />
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

            {errorStatus && <RenderError errorStatus={errorStatus} />}
            <div className="forgot__pass">
              <Form.Item
                name="remember"
                valuePropName="checked"
                className="remember__login text-green-700"
              >
                <Checkbox>{formatMessage('login.remember')}</Checkbox>
              </Form.Item>
            </div>
            <div className="flex items-center justify-center mt-10">
              <Button htmlType="submit" type="primary">
                {formatMessage('login.button.account')}
              </Button>
            </div>
            <div className="forgot__pass text-center mt-10">
              <a onClick={() => navigate('/forgot-password')}>Quên mật khẩu</a>
            </div>
            {/* <Button htmlType="submit">
              {formatMessage('register.button.account')}
            </Button> */}
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
