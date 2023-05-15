import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { logo } from '@assets/images';
import { isCheckLoading } from '@helper/isCheckLoading';
import { useSingleAsync } from '@hook/useAsync';
import authenticationPresenter from '@modules/authentication/presenter';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();
  const { forgotPassword } = authenticationPresenter;
  const [desc, setDesc] = useState(false);
  const forgotPasswordCall = useSingleAsync(forgotPassword);

  const onSubmit = (values: any) => {
    forgotPasswordCall.execute(values).then(() => setDesc(true));
  };

  return (
    <>
      <div className="change_language">
        <ChangeLanguage />
      </div>
      <div className="main-form forgot-form">
        <div className="wrapper_logo">
          <div className="wrap_logo">
            <img
              src={logo}
              className="logo"
              onClick={() => {
                navigate('/login');
              }}
            />
          </div>
        </div>
        <div className="content-form">
          <h3 className="main-title-forgot">{formatMessage('forgot.password.title')}</h3>
          {desc ? (
            <>
              <div className="text-center">
                <h3 className="text-desc">{formatMessage('forgot.text.desc')}</h3>
              </div>
              <div className="forgot__pass text-center mt-52">
                <a onClick={() => navigate('/login')}>{formatMessage('login.back')}</a>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <h4 className="desc">{formatMessage('forgot.desc')}</h4>
              </div>
              <Form name="forgotPassword" layout="vertical" onFinish={onSubmit}>
                <Form.Item
                  label={formatMessage('forgot.password.email')}
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                    },
                  ]}
                >
                  <Input placeholder="NguyenVanB@gmail.com" />
                </Form.Item>
                <div className="flex items-center justify-center mt-14">
                  <Button
                    htmlType="submit"
                    type="primary"
                    loading={isCheckLoading([forgotPasswordCall])}
                  >
                    {formatMessage('forgot.password.button.accept')}
                  </Button>
                </div>
              </Form>
              <div className="forgot__pass text-center mt-52">
                <a onClick={() => navigate('/login')}>{formatMessage('login.back')}</a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
