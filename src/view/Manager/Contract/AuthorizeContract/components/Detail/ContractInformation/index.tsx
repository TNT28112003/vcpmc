import React, { useState } from 'react';
import { Col, Row } from 'antd';

import './styles.scss';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { useNavigate } from 'react-router-dom';
import ModalContractExtension from '../ModalContractExtension';

const ContractInformation = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Chỉnh sửa hợp đồng',
      handleAction: () => navigate('manager/contract/add-authorize-contract'),
    },
    {
      iconType: 'add',
      name: 'Gia hạn hợp đồng',
      handleAction: () => navigate('manager/contract/add-authorize-contract'),
    },
    {
      iconType: 'cancel',
      name: 'Hủy hợp đồng',
      handleAction: () => setIsVisible(true),
    },
  ];

  return (
    <div className="mt-[25px]">
      <Row>
        <Col span={22}>
          <Row>
            <Col span={10}>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Số hợp đồng:</h3>
                  <p className="text-[13px] font-normal">BH123</p>
                </div>
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Tên hợp đồng:</h3>
                  <p className="text-[13px] font-normal">Hợp đồng uỷ quyền tác phẩm âm nhạc</p>
                </div>
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Ngày hiệu lực:</h3>
                  <p className="text-[13px] font-normal">01/05/2021</p>
                </div>
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Ngày hết hạn:</h3>
                  <p className="text-[13px] font-normal">01/12/2021</p>
                </div>
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Tình trạng:</h3>
                  <p className="text-[13px] font-normal">Còn thời hạn</p>
                </div>
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Đính kèm tệp:</h3>
                  <p className="text-[13px] font-normal">hetthuongcannho.doc</p>
                </div>
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-y-[15px]">
                <h3 className="font-semibold text-[13px] text-[#FFAC69]">
                  Thông tin pháp nhân uỷ quyền
                </h3>
                <div className="flex">
                  <h3 className="w-[205px] font-semibold text-[13px]">Quyền tác giả:</h3>
                  <p className="text-[13px] font-normal">0%</p>
                </div>
                <div className="flex">
                  <h3 className="w-[205px] font-semibold text-[13px]">Quyền liên quan:</h3>
                </div>
                <div className="flex">
                  <h3 className="w-[205px] text-[13px]">Quyền của người biểu diễn:</h3>
                  <p className="text-[13px] font-normal">50%</p>
                </div>
                <div className="flex">
                  <h3 className="w-[205px] text-[13px]">Quyền của nhà sản xuất: (Bản ghi/video)</h3>
                  <p className="text-[13px] font-normal">50%</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={22}>
          <div className="mt-[50px] mb-[20px]">
            <h3 className="font-semibold text-[16px] text-[#FFAC69]">
              Thông tin pháp nhân uỷ quyền
            </h3>
          </div>
          <Row>
            <Col span={10}>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Pháp nhân uỷ quyền:</h3>
                  <p className="text-[13px] font-normal">BH123</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Tên người uỷ quyền:</h3>
                  <p className="text-[13px] font-normal">Hợp đồng uỷ quyền tác phẩm âm nhạc</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Ngày sinh:</h3>
                  <p className="text-[13px] font-normal">01/05/2021</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Giới tính:</h3>
                  <p className="text-[13px] font-normal">01/12/2021</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Quốc tịch:</h3>
                  <p className="text-[13px] font-normal">Còn thời hạn</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Số điện thoại:</h3>
                  <p className="text-[13px] font-normal">Còn thời hạn</p>
                </div>
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Số CMND/ CCCD:</h3>
                  <p className="text-[13px] font-normal">123456789012</p>
                </div>
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Ngày cấp:</h3>
                  <p className="text-[13px] font-normal">10/07/2011</p>
                </div>
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Nơi cấp:</h3>
                  <p className="text-[13px] font-normal">Tp.HCM, Việt Nam</p>
                </div>
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Mã số thuế:</h3>
                  <p className="text-[13px] font-normal">92387489</p>
                </div>
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Nơi cư trú:</h3>
                  <p className="text-[13px] font-normal w-[200px]">
                    69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh
                  </p>
                </div>
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Email:</h3>
                  <p className="text-[13px] font-normal">nguyenvana@gmail.com</p>
                </div>
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Tài khoản đăng nhập:</h3>
                  <p className="text-[13px] font-normal">nguyenvana@gmail.com</p>
                </div>
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Mật khẩu:</h3>
                  <p className="text-[13px] font-normal">hetthuongcannho.doc</p>
                </div>
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Số tài khoản:</h3>
                  <p className="text-[13px] font-normal">1231123312211223</p>
                </div>
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Ngân hàng:</h3>
                  <p className="text-[13px] font-normal">ACB - Ngân hàng Á Châu</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
      <ModalContractExtension isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default ContractInformation;
