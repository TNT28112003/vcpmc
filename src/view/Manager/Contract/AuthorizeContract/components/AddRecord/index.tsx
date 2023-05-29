import CheckSuccessIcon from '@assets/icon/checkCircleSuccess';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerManager, routerManagerAddRecord } from '@view/Manager/router';
import React, { useState } from 'react';
import ModalAddRecord from './ModalAddRecord';

const AddRecord = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <MainTitleComponent
        breadcrumbs={[routerManager, routerManagerAddRecord]}
        title={'Thêm thông tin bản ghi'}
      />
      <div className="m-auto w-[670px] bg-[#2B2B3F] p-[40px] rounded-[16px] mt-[40px] mb-[40px]">
        <div className="flex items-center justify-center gap-[10px] border-b-[1px] border-[#C8C8DB] pb-[24px]">
          <CheckSuccessIcon />
          <h3 className="text-white text-[24px] font-bold leading-[24px]">
            Hợp đồng đã được tạo thành công
          </h3>
        </div>
        <h3 className="text-white text-[16px] font-bold mt-[30px] mb-[16px]">
          Có 2 cách để tạo bản ghi:
        </h3>
        <div>
          <div className="ml-[25px]">
            <h3 className="text-[#FF7506] text-[14px] font-medium">
              Cách 1: <span className="text-white"> Upload bản ghi trực tiếp</span>
            </h3>
            <p className="text-white text-[14px] font-normal leading-[20px] my-[16px] ml-[60px]">
              Bạn có thể thực hiện thêm bản ghi ngay trên website
            </p>
            <div className="ml-[60px] mb-[56px]">
              <button
                className="text-[16px] bg-[#FF7506] font-semibold border-none outline-none px-[24px] py-[14px] rounded-[8px]"
                onClick={() => setIsVisible(true)}
              >
                Thêm bản ghi bằng tool
              </button>
            </div>
          </div>
          <div className="ml-[25px]">
            <h3 className="text-[#FF7506] text-[14px] font-medium">
              Cách 1: <span className="text-white"> Upload bản ghi trực tiếp</span>
            </h3>
            <p className="text-white text-[14px] font-normal leading-[20px] my-[16px] ml-[60px]">
              Bạn có thể thực hiện thêm bản ghi ngay trên website
            </p>
            <div className="ml-[60px] mb-[56px]">
              <button className="text-[#FF7506] text-[16px] bg-transparent border-[1px] border-[#FF7506] font-semibold outline-none px-[24px] py-[14px] rounded-[8px]">
                Thêm bản ghi bằng tool
              </button>
            </div>
          </div>
          <div>
            <p className="text-[16px] text-[#FF4747] font-normal leading-[24px]">
              Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
            </p>
          </div>
        </div>
      </div>
      <ModalAddRecord isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </>
  );
};

export default AddRecord;
