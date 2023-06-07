import React, { useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerManager, routerManagerAddContractAuthorize } from '@view/Manager/router';
import { Button, Col, Form, Input, Radio, Row, notification } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import './styles.scss';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import UploadIcon from '@assets/icon/upload';
import contractAuthorizePresenter from '@modules/contractAuthorize/presenter';
import { useSingleAsync } from '@shared/hook/useAsync';
import moment from 'moment';

dayjs.extend(customParseFormat);

const AddAuthorize = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [gender, setGender] = useState<string>();
  const [effectiveDate, setEffectiveDate] = useState<string>();
  const [expirationDate, setExpirationDate] = useState<string>();
  const [dateRange, setDateRange] = useState<string>();
  const [DoB, setDoB] = useState<string>();

  const { addContractAuthorize } = contractAuthorizePresenter;
  const newContractAuthorize = useSingleAsync(addContractAuthorize);

  const handleCancel = () => {
    form.resetFields();
    navigate('/manager/contract');
  };

  const successNotification = (description: string) => {
    api.success({
      message: 'SUCESS',
      description: description,
      placement: 'top',
    });
  };

  const openNotification = (description: string) => {
    api.error({
      message: 'ERROR',
      description: description,
      placement: 'top',
    });
  };

  const dateNow = new Date();

  const handleAddContract = values => {
    const newContract = values;
    newContract['gender'] = gender;
    newContract['effectiveDate'] = effectiveDate;
    newContract['expirationDate'] = expirationDate;
    newContract['DoB'] = DoB;
    newContract['dateRange'] = dateRange;
    newContract['createDate'] = dateNow;
    newContractAuthorize
      .execute(newContract)
      .then(response => {
        if (response.status) {
          successNotification('Thêm thành công');
          navigate('/manager/contract/add-record');
        }
      })
      .catch((err) => {
        openNotification(err.message);
      });
  };

  return (
    <div>
      <MainTitleComponent
        breadcrumbs={[routerManager, routerManagerAddContractAuthorize]}
        title={'Thêm hợp đồng ủy quyền mới'}
      />
      <div className="mt-[30px]">
        {contextHolder}
        <Form onFinish={handleAddContract}>
          <Row className="border-b-[1px] border-solid border-[#727288] pb-[12px]">
            <Col span={8}>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Số hợp đồng : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="numberContract" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Tên hợp đồng : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="nameContract" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Ngày hiệu lực : <span className="text-[#FF4747]">*</span>
                </h3>
                <DatePicker
                  name="effectiveDate"
                  className="!w-[210px]"
                  onChange={(date, dateString) => {
                    setEffectiveDate(dateString);
                  }}
                />
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Ngày Hết hạn : <span className="text-[#FF4747]">*</span>
                </h3>
                <DatePicker
                  name="expirationDate"
                  className="!w-[210px]"
                  onChange={(date, dateString) => {
                    setExpirationDate(dateString);
                  }}
                />
              </div>
            </Col>
            <Col span={8}>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[135px]">Đính kèm tệp :</h3>
                <div className="button-icon-upload">
                  <label htmlFor="input-media">
                    <UploadIcon />
                    <h6>Tải lên</h6>
                  </label>
                  <input name="file" hidden type="file" id="input-media" />
                </div>
              </div>
            </Col>
            <Col span={8}>
              <h3 className="font-semibold text-[16px] text-[#FFAC69] mb-[12px]">Mức nhuận bút</h3>
              <div className="flex items-center mb-[10px]">
                <h3 className="w-[205px] text-white font-semibold text-[13px]">Quyền tác giả:</h3>
                <p className="text-[13px] text-white font-normal">0%</p>
              </div>
              <div className="flex items-center mb-[6px]">
                <h3 className="w-[205px] text-white font-semibold text-[13px]">Quyền liên quan:</h3>
              </div>
              <div className="flex items-center mb-[6px]">
                <h3 className="w-[205px] text-white text-[13px]">Quyền của người biểu diễn:</h3>
                <p className="text-[13px] text-white font-normal">50%</p>
              </div>
              <div className="flex items-center mb-[6px]">
                <h3 className="w-[205px] text-white text-[13px]">
                  Quyền của nhà sản xuất: <br /> (Bản ghi/video)
                </h3>
                <p className="text-[13px] text-white font-normal">50%</p>
              </div>
            </Col>
          </Row>
          <div className="mt-[20px] mb-[20px]">
            <h3 className="font-semibold text-[16px] text-[#FFAC69]">
              Thông tin pháp nhân uỷ quyền
            </h3>
          </div>
          <Row className="pb-[12px]">
            <Col span={8}>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Pháp nhân ủy quyền : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="authorized" className="!mb-0">
                  <Radio.Group name="authorized">
                    <Radio className="text-white" value={'Cá nhân'}>
                      Cá nhân
                    </Radio>
                    <Radio className="text-white" value={'Tổ chức'}>
                      Tổ chức
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Tên người ủy quyền : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="authorizationName" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Giới tính : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item className="!mb-0" name="gender">
                  <Radio.Group name="gender" onChange={e => setGender(e.target.value)}>
                    <Radio className="text-white" value={'Nam'}>
                      Nam
                    </Radio>
                    <Radio className="text-white" value={'Nữ'}>
                      Nữ
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Ngày sinh : <span className="text-[#FF4747]">*</span>
                </h3>
                <DatePicker
                  name="DoB"
                  className="!w-[210px]"
                  onChange={(date, dateString) => {
                    setDoB(dateString);
                  }}
                />
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Quốc tịch : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="nationality" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">Số điện thọai :</h3>
                <Form.Item name="phone" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
            </Col>
            <Col span={8}>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[135px]">
                  CMND/ CCCD : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="CCCD" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[135px]">
                  Ngày cấp : <span className="text-[#FF4747]">*</span>
                </h3>
                <DatePicker
                  name="dateRange"
                  className="!w-[210px]"
                  onChange={(date, dateString) => {
                    setDateRange(dateString);
                  }}
                />
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[135px]">
                  Nơi cấp : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="issuedBy" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[135px]">Mã số thuế :</h3>
                <Form.Item name="taxCode" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[135px]">Nơi cư trú :</h3>
                <Form.Item name="residence" className="!mb-0">
                  <TextArea className="!w-[210px]" />
                </Form.Item>
              </div>
            </Col>
            <Col span={8}>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Email : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="email" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Tên đăng nhập : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="userName" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Mật khẩu : <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="password" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">Số tài khoản :</h3>
                <Form.Item name="accountNumber" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">Ngân hàng :</h3>
                <Form.Item name="bank" className="!mb-0">
                  <Input className="!w-[210px]" />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <div className="mt-[40px] pb-[40px]">
            <div className="list__btn">
              <Button className="btn__cancel" onClick={handleCancel}>
                Hủy
              </Button>
              <Button className="btn__save" htmlType="submit">
                Lưu
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddAuthorize;
