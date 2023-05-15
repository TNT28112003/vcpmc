import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { logo } from '@assets/images';
import { isCheckLoading } from '@helper/isCheckLoading';
import { useSingleAsync } from '@hook/useAsync';
import { useAltaIntl } from '@hook/useTranslate';
import authenticationPresenter from '@modules/authentication/presenter';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import PageError from '@view/PageError';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();
  const { resetPassword, CheckRecoveryToken } = authenticationPresenter;
  const [checkRecovery, setCheckRecovery] = useState(false);
  const CheckRecoveryTokenCall = useSingleAsync(CheckRecoveryToken);
  const resetPasswordCall = useSingleAsync(resetPassword);
  const { code } = useParams<{ code: string }>();

  useEffect(() => {
    if (!code) {
      return;
    }
    CheckRecoveryTokenCall.execute({ code })
      .then(() => {
        setCheckRecovery(true);
      })
      .catch(() => setCheckRecovery(false));
  }, [code]);

  const onSubmitResetPassword = (values: any) => {
    delete values.confirmPassword;
    const newValue = {
      ...values,
      code: code,
    };
    resetPasswordCall?.execute(newValue).then(() => {
      navigate('/login');
    });
  };

  return (
    <>
      {!checkRecovery ? (
        <PageError />
      ) : (
        <div className="main-form auth-form">
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
          <div className="change_language">
            <ChangeLanguage />
          </div>
          <div className="content-form">
            <h3 className="main-title">{formatMessage('reset.password.title')}</h3>
            <Form
              name="resetPassword"
              layout="vertical"
              onFinish={onSubmitResetPassword}
              requiredMark={false}
            >
              <Form.Item
                label={formatMessage('profile.newPassword')}
                name="password"
                rules={[
                  {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !@#$%^&*\(\)-_=+:";{}[\]\\\/<>.,~`]).{8,}$/g,
                    min: 8,
                  },
                ]}
              >
                <Input.Password placeholder={formatMessage('profile.newPassword')} />
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
              <div className="flex items-center justify-center mt-14">
                <Button
                  htmlType="submit"
                  type="primary"
                  loading={isCheckLoading([resetPasswordCall])}
                >
                  {formatMessage('common.button.accept')}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
