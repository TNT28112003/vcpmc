import React, { useState } from 'react';
import { Col, Row } from 'antd';

import './styles.scss';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { useNavigate, useParams } from 'react-router-dom';
import ModalContractExtension from './components/ModalContractExtension';
import ModalCancellationContract from './components/ModalCancellationContract';
import moment from 'moment';
import CircleLabel from '@shared/components/CircleLabel';

const ContractInformation = ({ data }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCancel, setIsVisibleCancel] = useState(false);
  const { id } = useParams();

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Chỉnh sửa hợp đồng',
      handleAction: () => navigate(`/manager/contract/edit-authorize-contract/${id}`),
    },
    {
      iconType: 'add',
      name: 'Gia hạn hợp đồng',
      handleAction: () => setIsVisible(true),
    },
    {
      iconType: 'cancel',
      name: 'Hủy hợp đồng',
      handleAction: () => setIsVisibleCancel(true),
    },
  ];

  const duration = 259200000;
  const dateNow = new Date();
  const expirationDateNew = new Date(data?.expirationDate);
  const createAtNew = new Date(data?.createDate.toMillis());
  // kiem tra con thoi han hay khong
  const isTineLeft = dateNow.getTime() - expirationDateNew.getTime();
  // kiem tra hop dong moi tao
  const checkNew = dateNow.getTime() - createAtNew.getTime();

  return (
    <div className="mt-[25px]">
      <Row>
        <Col span={22}>
          <Row>
            <Col span={10}>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Số hợp đồng:</h3>
                  <p className="text-[13px] font-normal">{data?.numberContract}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Tên hợp đồng:</h3>
                  <p className="text-[13px] font-normal">{data?.nameContract}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Ngày hiệu lực:</h3>
                  <p className="text-[13px] font-normal">{data?.effectiveDate}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Ngày hết hạn:</h3>
                  <p className="text-[13px] font-normal">{data?.effectiveDate}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[120px] font-semibold text-[13px]">Tình trạng:</h3>
                  <p className="text-[13px] font-normal">
                    {checkNew < duration ? (
                      <CircleLabel text={'Mới'} colorCode="green" />
                    ) : isTineLeft < 0 ? (
                      <CircleLabel text={'Còn thời hạn'} colorCode="blue" />
                    ) : (
                      <CircleLabel text={'Hết thời hạn'} colorCode="grey" />
                    )}
                  </p>
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
                  <p className="text-[13px] font-normal">{data?.authorized}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Tên người uỷ quyền:</h3>
                  <p className="text-[13px] font-normal">{data?.authorizationName}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Ngày sinh:</h3>
                  <p className="text-[13px] font-normal">{data?.DoB}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Giới tính:</h3>
                  <p className="text-[13px] font-normal">{data?.gender}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Quốc tịch:</h3>
                  <p className="text-[13px] font-normal">{data?.nationality}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[170px] font-semibold text-[13px]">Số điện thoại:</h3>
                  <p className="text-[13px] font-normal">{data?.phone}</p>
                </div>
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Số CMND/ CCCD:</h3>
                  <p className="text-[13px] font-normal">{data?.CCCD}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Ngày cấp:</h3>
                  <p className="text-[13px] font-normal">{data?.dateRange}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Nơi cấp:</h3>
                  <p className="text-[13px] font-normal">{data?.issuedBy}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Mã số thuế:</h3>
                  <p className="text-[13px] font-normal">{data?.taxCode}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[130px] font-semibold text-[13px]">Nơi cư trú:</h3>
                  <p className="text-[13px] font-normal w-[200px]">{data?.residence}</p>
                </div>
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-y-[15px]">
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Email:</h3>
                  <p className="text-[13px] font-normal">{data?.email}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Tài khoản đăng nhập:</h3>
                  <p className="text-[13px] font-normal">{data?.userName}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Mật khẩu:</h3>
                  <p className="text-[13px] font-normal">{data?.password}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Số tài khoản:</h3>
                  <p className="text-[13px] font-normal">{data?.accountNumber}</p>
                </div>
                <div className="flex">
                  <h3 className="w-[152px] font-semibold text-[13px]">Ngân hàng:</h3>
                  <p className="text-[13px] font-normal">{data?.bank}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
      <ModalContractExtension isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
      <ModalCancellationContract
        isModalVisible={isVisibleCancel}
        setIsModalVisible={setIsVisibleCancel}
      />
    </div>
  );
};

export default ContractInformation;
