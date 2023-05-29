import { Col, Form, Input, Row, notification } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';

import { useAltaIntl } from '@hook/useTranslate';
import ButtonForm from '@shared/components/ButtonForm';
import './styles.scss';
import ISelect from '@core/select';
import SelectNoneLabelComponent, {
  ISelectNoneLabel,
} from '@shared/components/SelectNoneLableComponent';
import UploadIcon from '@assets/icon/upload';
import { serverTimestamp } from 'firebase/firestore';
import recordPresenter from '@modules/recordStore/presenter';
import { useSingleAsync } from '@shared/hook/useAsync';
import { useNavigate } from 'react-router-dom';
import { storage } from 'src/firebase/firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

interface IAddRecord {
  isModalVisible: boolean;
  setIsModalVisible: (arg: any) => void;
}

const ModalAddRecord = (props: IAddRecord) => {
  const { isModalVisible, setIsModalVisible } = props;
  const { formatMessage } = useAltaIntl();
  const [form] = useForm();
  const [api, contextHolder] = notification.useNotification();
  const [category, setCategory] = useState<string>();
  const [fileRecord, setFileRecord] = useState<any>();
  const { addRecord } = recordPresenter;
  const newRecord = useSingleAsync(addRecord);

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const openNotification = (description: string) => {
    api.error({
      message: 'ERROR',
      description: description,
      placement: 'top',
    });
  };

  if (fileRecord != null) {
    console.log('====================================');
    console.log(fileRecord.type);
    console.log('====================================');
  }

  const onFinish = (values: any) => {
    const storageRef = ref(storage, `video/${Date.now() + values.nameRecord}`);
    const uploadTask = uploadBytesResumable(storageRef, fileRecord);

    uploadTask.on(
      'state_changed',
      snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        alert('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error: any) => {
        openNotification(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
          // store user data db
          const newRecordData = values;
          newRecordData['category'] = category;
          newRecordData['photoURL'] = downloadURL;
          newRecordData['format'] = fileRecord.type;
          newRecordData['createAt'] = serverTimestamp();
          newRecord
            .execute(newRecordData)
            .then(response => {
              if (response.status) alert('Success');
            })
            .catch((err: any) => {
              openNotification(err.message);
            });
        });
      },
    );
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

  const onChange = value => {
    setCategory(value);
  };

  return (
    <Modal
      className="!w-[650px]"
      title={formatMessage('Thêm bản ghi mới')}
      open={isModalVisible}
      destroyOnClose={true}
      onCancel={handleCancel}
      closable={false}
      footer={
        <ButtonForm
          formName="form-add-record"
          nameButtonSubmit={'common.save'}
          onCancelForm={() => handleCancel()}
          onOkForm={() => form.submit()}
        />
      }
    >
      {contextHolder}
      <Form
        layout="vertical"
        name="formAddRecord"
        form={form}
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          name="nameRecord"
          label="Tên bản ghi:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input className="py-[8px]" />
        </Form.Item>
        <Form.Item
          name="ISRC"
          label="Mã ISRC:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input className="py-[8px]" />
        </Form.Item>
        <Form.Item
          name="author"
          label="Tác giả:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input className="py-[8px]" />
        </Form.Item>
        <Form.Item
          name="singer"
          label="Ca sĩ/Nhóm nhạc:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input className="py-[8px]" />
        </Form.Item>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Thể loại:">
              <div className="mt-[-20px] mb-[-20px]">
                {arraySelectFilter.map(item => (
                  <SelectNoneLabelComponent
                    name="category"
                    onChange={onChange}
                    key={item.name}
                    className={`margin-select ${item.keyLabel}`}
                    dataString={item.dataString}
                  />
                ))}
              </div>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Col span={12}></Col>
            <Form.Item
              name="producer"
              label="Nhà sản xuất:"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="py-[8px]" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] mr-[8px]">Đính kèm bản ghi:</h3>
              <div className="button-icon-upload">
                <label htmlFor="input-media">
                  <UploadIcon />
                  <h6 className="text-[14px] text-[#ffac69]">Tải lên</h6>
                </label>
                <input
                  name="fileRecord"
                  hidden
                  type="file"
                  id="input-media"
                  onChange={(e: any) => setFileRecord(e.target.files[0])}
                />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] mr-[8px]">
                Đính kèm lời bài hát:
              </h3>
              <div className="button-icon-upload">
                <label htmlFor="input-media">
                  <UploadIcon />
                  <h6 className="text-[14px] text-[#ffac69]">Tải lên</h6>
                </label>
                <input name="fileDoc" hidden type="file" id="input-media" />
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ModalAddRecord;
