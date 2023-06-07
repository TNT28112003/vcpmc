import React, { useState } from 'react';
import { device } from '@assets/images';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import CircleLabel from '@shared/components/CircleLabel';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerManagerDetailDevice, routerManagerDevice } from '@view/Manager/router';
import { Col, Row } from 'antd';
import ModalEditDevice from '../ModalEditDevice';
import { useNavigate } from 'react-router';

const DetialsDevice = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

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
      <MainTitleComponent
        breadcrumbs={[routerManagerDevice, routerManagerDetailDevice]}
        title={'Thông tin thiết bị - Device12233444'}
      />
      <Row>
        <Col span={22}>
          <div className="mt-[20px] bg-[#2B2B3F] py-[30px] px-[50px] rounded-[8px] pb-[60px]">
            <Row gutter={120}>
              <Col span={8}>
                <div className="flex flex-col gap-y-[20px]">
                  <h3 className="text-[20px] text-[#FF7506] font-semibold leading-[24px]">
                    Thông tin thiết bị
                  </h3>
                  <div>
                    <img src={device} alt="Device" />
                  </div>
                  <CircleLabel text={'Hoạt động'} colorCode="green" />
                  <div className="flex gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[170px]">
                      Ghi chú
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">
                      Văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={7}>
                <div className="flex flex-col gap-y-[20px]">
                  <h3 className="text-[20px] text-[#FF7506] font-semibold leading-[24px]">
                    DEVICE12233444
                  </h3>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      SKU/ID:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">A23434455556</p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Địa chỉ Mac:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">113.56.79.01</p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Tên đăng nhập:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">User322334</p>
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
                    <p className="text-[#F5F5FF] font-normal text-[14px]">Ho Chi Minh</p>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                      Thời hạn bảo hành:
                    </h3>
                    <p className="text-[#F5F5FF] font-normal text-[14px]">22/06/2021</p>
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
                      <p className="text-[#F5F5FF] font-normal text-[14px]">512GB</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <h3 className="text-white text-[14px] font-semibold leading-[24px] w-[150px]">
                        Còn trống
                      </h3>
                      <p className="text-[#F5F5FF] font-normal text-[14px]">123GB</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
      <ModalEditDevice isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default DetialsDevice;
