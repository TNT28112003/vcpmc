import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerManager, routerManagerAddContractAuthorize } from '@view/Manager/router';
import { Col, Form, Input, Row } from 'antd';
import React from 'react';

const AddAuthorize = () => {
  return (
    <div>
      <MainTitleComponent
        breadcrumbs={[routerManager, routerManagerAddContractAuthorize]}
        title={'Thêm hợp đồng ủy quyền mới'}
      />
      <div className="mt-[30px]">
        <Row>
          <Col span={8}>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3>Số hợp đồng:</h3>
              <Form.Item className="!mb-0">
                <Input />
              </Form.Item>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddAuthorize;
