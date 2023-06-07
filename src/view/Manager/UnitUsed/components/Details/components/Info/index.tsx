import React from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Button, Form, Input } from 'antd';
import useForm from 'rc-field-form/lib/useForm';
import { useNavigate, useParams } from 'react-router';
import { routerManagerUnitsUsed, routerManagerUnitsUsedDetailsInfo } from '@view/Manager/router';
import RightMenu, { IArrayAction } from '@layout/RightMenu';

const Info = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Chỉnh sửa',
      handleAction: () => navigate(`/manager/units-used/info/edit/${id}`),
    },
  ];
  return (
    <div>
      <MainTitleComponent
        breadcrumbs={[routerManagerUnitsUsed, routerManagerUnitsUsedDetailsInfo]}
        title={'Thêm người dùng'}
      />
      <Form className="mt-[30px]">
        <div className="flex items-center gap-[200px]">
          <div className="">
            <div className="flex items-center mb-[14px]">
              <h3 className="text-white font-semibold text-[14px] w-[165px]">Tên người dùng</h3>
              <h3 className="text-white font-medium text-[14px] w-[165px]">Tên người dùng</h3>
            </div>
            <div className="flex items-center mb-[14px]">
              <h3 className="text-white font-semibold text-[14px] w-[165px]">Email</h3>
              <h3 className="text-white font-medium text-[14px] w-[165px]">Tên người dùng</h3>
            </div>
            <div className="flex items-center mb-[14px]">
              <h3 className="text-white font-semibold text-[14px] w-[165px]">Vai trò</h3>
              <h3 className="text-white font-medium text-[14px] w-[165px]">Tên người dùng</h3>
            </div>
          </div>
          <div className="">
            <div className="flex items-center mb-[14px]">
              <h3 className="text-white font-semibold text-[14px] w-[165px]">Tên đăng nhập</h3>
              <h3 className="text-white font-medium text-[14px] w-[165px]">Tên người dùng</h3>
            </div>
            <div className="flex items-center mb-[14px]">
              <h3 className="text-white font-semibold text-[14px] w-[165px]">Mật khẩu</h3>
              <h3 className="text-white font-medium text-[14px] w-[165px]">Tên người dùng</h3>
            </div>
            <div className="flex items-center mb-[14px]">
              <h3 className="text-white font-semibold text-[14px] w-[165px]">Nhập lại mật khẩu</h3>
              <h3 className="text-white font-medium text-[14px] w-[165px]">Tên người dùng</h3>
            </div>
          </div>
        </div>
      </Form>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default Info;
