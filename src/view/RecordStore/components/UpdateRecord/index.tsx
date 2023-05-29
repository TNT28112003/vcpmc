import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './UpdateRecord.scss';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerViewRecord, routerViewRecordUpdate } from '@view/RecordStore/router';
import UploadImage from '../UploadImage';
import ISelect from '@core/select';
import SelectNoneLabelComponent, {
  ISelectNoneLabel,
} from '@shared/components/SelectNoneLableComponent';

const UpdateRecord = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();

  const chooseFile = (file: any) => {
    form.setFieldsValue({ avatar: file });
  };

  const dataCategory: ISelect[] = [
    { label: 'common.all', value: 'all' },
    { label: 'Pop', value: 'Pop' },
    { label: 'EDM', value: 'EDM' },
    { label: 'Ballad', value: 'Ballad' },
  ];

  const arraySelectFilter: ISelectNoneLabel[] = [
    { dataString: dataCategory, keyLabel: 'category' },
  ];

  const onFinish = () => {
    navigate('/');
  };

  return (
    <div className="update__record__page m-auto">
      <div className="breadcumb">
        <MainTitleComponent
          breadcrumbs={[routerViewRecord, routerViewRecordUpdate]}
          title={`Bản ghi -`}
        />
      </div>
      <div className="content">
        <div className="record__left">
          <div className="record_info">
            <div className="title_info">Thông tin bản ghi</div>
            <img src={'record.image'} alt="" className="record__img" />
            <div className="music__name mt-[16px]">
              <UploadImage chooseFile={chooseFile} />
              <div className="text-center mt-[24px] mb-[6px]">Matern.mp3</div>
            </div>
            <Row>
              <Col span={12} className="info_name">
                Ngày thêm:
              </Col>
              <Col span={12} className="info_value">
                {'record.createAt'}
              </Col>
            </Row>
            <Row>
              <Col span={12} className="info_name">
                Người tải lên:
              </Col>
              <Col span={12} className="info_value">
                {'record.presonUpload'}
              </Col>
            </Row>

            <Row>
              <Col span={12} className="info_name">
                Người duyệt:
              </Col>
              <Col span={12} className="info_value">
                {'record.personApproval'} <br />
                {/* (Tự động phê duyệt) */}
              </Col>
            </Row>
            <Row>
              <Col span={12} className="info_name">
                Ngày phê duyệt:
              </Col>
              <Col span={12} className="info_value">
                {'record.ApprovalAt'}
              </Col>
            </Row>
          </div>
          <div className="record_authority">
            <div className="title_info">Thông tin ủy quyền</div>
            <Row>
              <Col span={12} className="info_name">
                Số hợp đồng:
              </Col>
              <Col span={12} className="info_value">
                BH123
              </Col>
            </Row>
            <Row>
              <Col span={12} className="info_name">
                Ngày nhận ủy quyền:
              </Col>
              <Col span={12} className="info_value">
                01/05/2021
              </Col>
            </Row>
            <Row>
              <Col span={12} className="info_name">
                Ngày hết hạn:
              </Col>
              <Col span={12} className="info_value">
                01/08/2025
              </Col>
            </Row>
            <Row>
              <Col span={12} className="info_name">
                Trạng thái:
              </Col>
              <Col span={12} className="info_value">
                <div className="list_tag_time">
                  <div className="tag__cicrle" />
                  Còn thời hạn
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="record_right">
          <div className="title_info" style={{ marginBottom: 20 }}>
            Chỉnh sửa thông tin
          </div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h3>
              Tên bản ghi: <span style={{ color: 'red' }}>*</span>
            </h3>
            <Form.Item
              name="Name"
              rules={[{ required: true, message: 'Vui lòng nhập tên bản ghi!' }]}
            >
              <Input />
            </Form.Item>
            <h3>
              Mã ISRC: <span style={{ color: 'red' }}>*</span>
            </h3>
            <Form.Item name="ISRC" rules={[{ required: true, message: 'Vui lòng nhập ISRC!' }]}>
              <Input />
            </Form.Item>
            <h3>
              Ca sĩ: <span style={{ color: 'red' }}>*</span>
            </h3>
            <Form.Item
              name="singer"
              rules={[{ required: true, message: 'Vui lòng nhập tên ca sĩ!' }]}
            >
              <Input />
            </Form.Item>
            <h3>
              Tác giả: <span style={{ color: 'red' }}>*</span>
            </h3>
            <Form.Item
              name="author"
              rules={[{ required: true, message: 'Vui lòng nhập tên tác giả!' }]}
            >
              <Input />
            </Form.Item>
            <h3>
              Nhà sản xuất: <span style={{ color: 'red' }}>*</span>
            </h3>
            <Form.Item
              name="producer"
              rules={[{ required: true, message: 'Vui lòng nhập tên nhà sản xuất!' }]}
            >
              <Input />
            </Form.Item>

            <h3>
              Thể Loại: <span style={{ color: 'red' }}>*</span>
            </h3>
            <Form.Item
              name="category"
              rules={[{ required: true, message: 'Vui lòng nhập tên thể loại!' }]}
            >
              <div className="mt-[-20px]">
                {arraySelectFilter.map(item => (
                  <SelectNoneLabelComponent
                    key={item.name}
                    className={`margin-select ${item.keyLabel}`}
                    dataString={item.dataString}
                  />
                ))}
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="list__btn">
        <Link to="/record-store">
          <Button className="btn__cancel">Hủy</Button>
        </Link>

        <Button className="btn__save" form="updateDeviceForm" onClick={onFinish}>
          Lưu
        </Button>
      </div>
    </div>
  );
};

export default UpdateRecord;
