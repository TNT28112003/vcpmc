import React, { useEffect, useState } from 'react';
import { device as deviceImg } from '@assets/images';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import CircleLabel from '@shared/components/CircleLabel';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerManagerDetailDevice, routerManagerDevice } from '@view/Manager/router';
import { Col, Row, notification } from 'antd';
import ModalEditDevice from '../ModalEditDevice';
import { useNavigate, useParams } from 'react-router';
import DeviceEntity from '@modules/device/entity';
import devicePresenter from '@modules/device/presenter';
import { useSingleAsync } from '@shared/hook/useAsync';

const DetialsDevice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [device, setDevice] = useState<DeviceEntity>();
  const { getDevice } = devicePresenter;
  const getSingleDevice = useSingleAsync(getDevice);

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
    getSingleDevice
      .execute(id)
      .then(response => {
        setDevice(response.data);
      })
      .catch((err: any) => {
        errorNotification(err.message);
      });
  }, []);

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Chỉnh sửa',
      handleAction: () => setIsVisible(true),
    },
    {
      iconType: 'lock',
      name: 'Khôi phục mật khẩu',
    },
    {
      iconType: 'refresh',
      name: 'Khôi phục bộ nhớ',
    },
  ];
  return (
    <div>
      {contextHolder}
      <MainTitleComponent
        breadcrumbs={[routerManagerDevice, routerManagerDetailDevice]}
        title={`Thông tin thiết bị - ${device?.deviceName}`}
      />
      <Row>
        <Col span={22}>
          <div className="mt-[20px] bg-[#2B2B3F] py-[30px] px-[50px] rounded-[8px] pb-[60px]">
            <Row gutter={120}>
              <Col span={7}>
                <div className="flex flex-col gap-y-[20px]">
                  <h3 className="text-[20px] text-[#FF7506] font-semibold leading-[24px]">
                    Thông tin thiết bị
                  </h3>
                  <div>
                    <img src={deviceImg} alt="Device" />
                  </div>
                  {device?.status == 1 ? (
                    <CircleLabel text={'Hoạt động'} colorCode="green" />
                  ) : (
                    <CircleLabel text={'Ngưng hoạt động'} colorCode="red" />
                  )}
                  <div className="flex gap-[20px] items-center">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[70px]">
                      Ghi chú :
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">{device?.note}</p>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="flex flex-col gap-y-[20px]">
                  <h3 className="text-[20px] text-[#FF7506] font-semibold leading-[24px]">
                    {device?.deviceName}
                  </h3>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      SKU/ID:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">{device?.SKU}</p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Địa chỉ Mac:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">{device?.IPAddress}</p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Tên đăng nhập:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">{device?.userName}</p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Định dạng:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">Displayable</p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Vị trí:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">{device?.location}</p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Thời hạn bảo hành:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">
                      {device?.warrantyPeriod}
                    </p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Trạng thái thiết bị:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">Activated</p>
                  </div>
                </div>
              </Col>
              <Col span={9}>
                <div className="flex flex-col gap-y-[20px]">
                  <h3 className="text-[20px] text-[#FF7506] font-semibold leading-[24px]">
                    Thông tin phiên bản
                  </h3>
                  <div className="flex gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Phiên bản cũ nhất:
                    </h3>
                    <div className="flex flex-col gap-y-[20px]">
                      <p className="text-[#F5F5FF] font-normal text-[14px]">12.3 (20/02/2020)</p>
                      <p className="text-[#F5F5FF] font-normal text-[14px]">12.3 (20/02/2020)</p>
                    </div>
                  </div>
                  <div className="mt-[50px] flex flex-col gap-y-[20px]">
                    <h3 className="text-[20px] text-[#FF7506] font-semibold leading-[24px]">
                      Dung lượng bộ nhớ
                    </h3>
                    <div className="flex items-center gap-[20px]">
                      <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                        Dung lượng
                      </h3>
                      <p className="text-[#F5F5FF] font-normal text-[14px]">
                        {device?.information}
                      </p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                        Còn trống
                      </h3>
                      <p className="text-[#F5F5FF] font-normal text-[14px]">
                        {device?.information}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
      <ModalEditDevice id={id} isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default DetialsDevice;
