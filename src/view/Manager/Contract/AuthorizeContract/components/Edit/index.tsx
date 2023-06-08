import React, { useEffect, useState } from 'react';
import { routerManager, routerManagerEditContractAuthorize } from '@view/Manager/router';
import { Button, Col, DatePicker, Input, Radio, Row, Spin, notification } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import './styles.scss';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import UploadIcon from '@assets/icon/upload';
import contractAuthorizePresenter from '@modules/contractAuthorize/presenter';
import { useSingleAsync } from '@shared/hook/useAsync';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import ContractAuthorizeEntity from '@modules/contractAuthorize/entity';

dayjs.extend(customParseFormat);
const dateFormat = 'DD/MM/YYYY';

const EditAuthorize = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState<boolean>(true);
  const { changeContractAuthorize, getContractAuthorize } = contractAuthorizePresenter;
  const getSingleContractAuthorize = useSingleAsync(getContractAuthorize);
  const changeNewContract = useSingleAsync(changeContractAuthorize);
  const [contractAuthorize, setContractAuthorize] = useState<Partial<ContractAuthorizeEntity>>({
    CCCD: '',
    accountNumber: '',
    authorizationName: '',
    authorized: '',
    bank: '',
    email: '',
    gender: '',
    issuedBy: '',
    nameContract: '',
    nationality: '',
    numberContract: '',
    password: '',
    phone: '',
    residence: '',
    taxCode: '',
    userName: '',
    DoB: '',
    effectiveDate: '',
    expirationDate: '',
    dateRange: '',
    createAt: '',
  });

  const handleCancel = () => {
    navigate('/manager/contract');
  };

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

  const handleEditContract = () => {
    setLoading(prev => !prev);
    changeNewContract
      .execute(id, contractAuthorize)
      .then(response => {
        if (response.status) {
          setLoading(prev => !prev);
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
    getSingleContractAuthorize
      .execute(id)
      .then(response => {
        setContractAuthorize(response.data);
        setLoading(false);
      })
      .catch((err: any) => {
        openNotification(err.message);
      });
  }, []);

  return (
    <div>
      <MainTitleComponent
        breadcrumbs={[routerManager, routerManagerEditContractAuthorize]}
        title={`Hợp đồng uỷ quyền bài hát - ${contractAuthorize.nameContract}`}
      />
      <div className="mt-[30px]">
        {contextHolder}
        {loading && (
          <div className="spin_loading">
            <Spin />
          </div>
        )}
        <Row className="border-b-[1px] border-solid border-[#727288] pb-[12px]">
          <Col span={8}>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Số hợp đồng : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.numberContract}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, numberContract: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Tên hợp đồng : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.nameContract}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, nameContract: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Ngày hiệu lực : <span className="text-[#FF4747]">*</span>
              </h3>
              <DatePicker
                name="effectiveDate"
                className="!w-[210px]"
                value={dayjs(`${contractAuthorize.effectiveDate}`)}
                onChange={(date, dateString) => {
                  setContractAuthorize(prev => ({ ...prev, effectiveDate: dateString }));
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
                value={dayjs(`${contractAuthorize.expirationDate}`)}
                onChange={(date, dateString) => {
                  setContractAuthorize(prev => ({ ...prev, expirationDate: dateString }));
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
          <h3 className="font-semibold text-[16px] text-[#FFAC69]">Thông tin pháp nhân uỷ quyền</h3>
        </div>
        <Row className="pb-[12px]">
          <Col span={8}>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Pháp nhân ủy quyền : <span className="text-[#FF4747]">*</span>
              </h3>
              <Radio.Group
                name="authorized"
                value={contractAuthorize.authorized}
                onChange={event => {
                  setContractAuthorize(prev => ({ ...prev, authorized: event.target.value }));
                }}
              >
                <Radio className="text-white" value={'Cá nhân'}>
                  Cá nhân
                </Radio>
                <Radio className="text-white" value={'Tổ chức'}>
                  Tổ chức
                </Radio>
              </Radio.Group>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Tên người ủy quyền : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.authorizationName}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, authorizationName: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Giới tính : <span className="text-[#FF4747]">*</span>
              </h3>
              <Radio.Group
                name="gender"
                value={contractAuthorize.gender}
                onChange={event => {
                  setContractAuthorize(prev => ({ ...prev, gender: event.target.value }));
                }}
              >
                <Radio className="text-white" value={'Nam'}>
                  Nam
                </Radio>
                <Radio className="text-white" value={'Nữ'}>
                  Nữ
                </Radio>
              </Radio.Group>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Ngày sinh : <span className="text-[#FF4747]">*</span>
              </h3>
              <DatePicker
                name="DoB"
                className="!w-[210px]"
                value={dayjs(`${contractAuthorize.DoB}`)}
                onChange={(date, dateString) => {
                  setContractAuthorize(prev => ({ ...prev, DoB: dateString }));
                }}
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Quốc tịch : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.nationality}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, nationality: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">Số điện thọai :</h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.phone}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, phone: event.target.value }))
                }
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[135px]">
                CMND/ CCCD : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.CCCD}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, CCCD: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[135px]">
                Ngày cấp : <span className="text-[#FF4747]">*</span>
              </h3>
              <DatePicker
                name="dateRange"
                className="!w-[210px]"
                value={dayjs(`${contractAuthorize.dateRange}`)}
                onChange={(date, dateString) => {
                  setContractAuthorize(prev => ({ ...prev, dateRange: dateString }));
                }}
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[135px]">
                Nơi cấp : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.issuedBy}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, issuedBy: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[135px]">Mã số thuế :</h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.taxCode}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, taxCode: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[135px]">Nơi cư trú :</h3>
              <TextArea
                className="!w-[210px]"
                value={contractAuthorize.residence}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, residence: event.target.value }))
                }
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Email : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.email}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, email: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Tên đăng nhập : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input className="!w-[210px]" value={contractAuthorize.userName} />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Mật khẩu : <span className="text-[#FF4747]">*</span>
              </h3>
              <Input.Password
                className="!w-[210px]"
                value={contractAuthorize.password}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, password: event.target.value }))
                }
              />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">Số tài khoản :</h3>
              <Input className="!w-[210px]" value={contractAuthorize.accountNumber} />
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">Ngân hàng :</h3>
              <Input
                className="!w-[210px]"
                value={contractAuthorize.bank}
                onChange={event =>
                  setContractAuthorize(prev => ({ ...prev, bank: event.target.value }))
                }
              />
            </div>
          </Col>
        </Row>
        <div className="mt-[40px] pb-[40px]">
          <div className="list__btn">
            <Button className="btn__cancel" onClick={handleCancel}>
              Hủy
            </Button>
            <Button className="btn__save" onClick={handleEditContract}>
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAuthorize;
