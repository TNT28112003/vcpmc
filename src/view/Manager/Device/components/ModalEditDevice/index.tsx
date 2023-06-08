import { Form, Input, Radio, RadioChangeEvent, notification } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';

import { useAltaIntl } from '@hook/useTranslate';
import ButtonForm from '@shared/components/ButtonForm';
import devicePresenter from '@modules/device/presenter';
import { useSingleAsync } from '@shared/hook/useAsync';
import DeviceEntity from '@modules/device/entity';
import { useNavigate } from 'react-router';

interface IDeleteDevice {
  id?: string;
  isModalVisible: boolean;
  setIsModalVisible: (arg: any) => void;
  handleClick?: (event: any) => void;
}

const ModalEditDevice = (props: IDeleteDevice) => {
  const { isModalVisible, setIsModalVisible } = props;
  const navigate = useNavigate();
  const { formatMessage } = useAltaIntl();
  const [form] = useForm();
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState<boolean>(true);
  const { getDevice, changeDevice } = devicePresenter;
  const getSingleDevice = useSingleAsync(getDevice);
  const changeNewDevice = useSingleAsync(changeDevice);
  const [device, setDevice] = useState<Partial<DeviceEntity>>({
    id: '',
    SKU: '',
    deviceName: '',
    label: '',
    IPAddress: '',
    information: '',
    userName: '',
    password: '',
    note: '',
    warrantyPeriod: '',
    location: '',
    status: 1,
  });

  const errorNotification = (description: string) => {
    api.error({
      message: 'ERROR',
      description: description,
      placement: 'top',
    });
  };

  const successNotification = (description: string) => {
    api.success({
      message: 'SUCESS',
      description: description,
      placement: 'top',
    });
  };

  const handleEditDevice = () => {
    setLoading(prev => !prev);
    changeNewDevice
      .execute(props.id, device)
      .then(response => {
        if (response.status) {
          setLoading(prev => !prev);
          navigate('/manager/device');
          successNotification('Cập nhật thành công');
        }
      })
      .catch(err => {
        setLoading(prev => !prev);
        errorNotification(err.message);
      });
  };

  const openNotification = (description: string) => {
    api.error({
      message: 'ERROR',
      description: description,
      placement: 'top',
    });
  };

  useEffect(() => {
    getSingleDevice
      .execute(props.id)
      .then(response => {
        setDevice(response.data);
        setLoading(false);
      })
      .catch((err: any) => {
        openNotification(err.message);
      });
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <Modal
      title={formatMessage('Chỉnh sửa thông tin thiết bị')}
      className="!w-[600px]"
      open={isModalVisible}
      destroyOnClose={true}
      onCancel={handleCancel}
      closable={false}
      footer={
        <ButtonForm
          formName="form-change-pass"
          nameButtonSubmit={'common.save'}
          onCancelForm={() => handleCancel()}
          onOkForm={() => handleEditDevice()}
        />
      }
    >
      {contextHolder}
      <div className="mt-[20px] mb-[12px]">
        <h3 className="text-white font-semibold">
          Tên thiết bị: <span className="text-[#FF4747]">*</span>
        </h3>
      </div>
      <Input
        className="py-[6px]"
        value={device.deviceName}
        onChange={event => setDevice(prev => ({ ...prev, deviceName: event.target.value }))}
      />
      <div className="mt-[20px] mb-[12px]">
        <h3 className="text-white font-semibold">
          SKU/ID: <span className="text-[#FF4747]">*</span>
        </h3>
      </div>
      <Input
        className="py-[6px]"
        value={device.SKU}
        onChange={event => setDevice(prev => ({ ...prev, SKU: event.target.value }))}
      />
      <div className="mt-[20px] mb-[12px]">
        <h3 className="text-white font-semibold">
          Địa chỉ Mac: <span className="text-[#FF4747]">*</span>
        </h3>
      </div>
      <Input
        className="py-[6px]"
        value={device.IPAddress}
        onChange={event => setDevice(prev => ({ ...prev, IPAddress: event.target.value }))}
      />
      <div className="mt-[20px] mb-[12px]">
        <h3 className="text-white font-semibold">
          Tên đăng nhập: <span className="text-[#FF4747]">*</span>
        </h3>
      </div>
      <Input
        className="py-[6px]"
        value={device.userName}
        onChange={event => setDevice(prev => ({ ...prev, userName: event.target.value }))}
      />
      <div className="mt-[20px] mb-[12px]">
        <h3 className="text-white font-semibold">
          Vị trí: <span className="text-[#FF4747]">*</span>
        </h3>
      </div>
      <Input
        className="py-[6px]"
        value={device.location}
        onChange={event => setDevice(prev => ({ ...prev, location: event.target.value }))}
      />
      <div className="flex gap-[20px] items-center pb-[20px] mt-[20px]">
        <h3 className="text-white font-semibold">
          Trạng thái thiết bị: <span className="text-[#FF4747]">*</span>
        </h3>
        <Radio.Group
          value={device.status}
          onChange={event => {
            setDevice(prev => ({ ...prev, status: event.target.value }));
          }}
          className="!flex gap-[80px]"
        >
          <Radio value={1}>
            <span className="text-[14px] font-normal">Đã kích hoạt</span>
          </Radio>
          <Radio value={2}>
            <span className="text-[14px] font-normal">Ngưng kích hoạt</span>
          </Radio>
        </Radio.Group>
      </div>
    </Modal>
  );
};

export default ModalEditDevice;
