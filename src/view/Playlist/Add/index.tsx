import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';
import { Button, Col, Form, Input, Row, Switch } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from '../Details/fakeData.json';
import { imagePlayList } from '@assets/images';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerViewPlaylist, routerViewPlaylistAdd } from '../router';
import TextArea from 'antd/es/input/TextArea';
import type { InputRef } from 'antd';
import { Tag, theme } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import UploadIcon from '@assets/icon/upload';
import { onValue, ref, set } from 'firebase/database';
import { database } from 'src/firebase/firebase.config';

interface DataType {
  id: string;
  nameRecord: string;
  singer: string;
  author: string;
  arrayRecord: [];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'STT',
    render: (text, object, index) => <div> {index + 1}</div>,
  },
  {
    title: 'Tên bản ghi',
    dataIndex: 'nameRecord',
  },
  {
    title: 'Ca sĩ',
    dataIndex: 'singer',
  },
  {
    title: 'tác giả',
    dataIndex: 'author',
  },
  {
    title: 'common.empty',
    render: (_, { id }) => {
      return (
        <Link to={`/playlist/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>
          Nghe
        </Link>
      );
    },
  },
  {
    title: 'common.empty',
    render: (_, { id }) => {
      return (
        <Link to={`/playlist/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>
          Gỡ
        </Link>
      );
    },
  },
];

const AddPlayList = () => {
  const idChooses = 'id';
  const navigate = useNavigate();
  const table = useTable();
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([{ field: 'category', value: 'all' }]);
  const [data, setData] = useState();

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm bản ghi',
      handleAction: () => navigate('/playlist/add-record'),
    },
  ];

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const { token } = theme.useToken();
  const [tags, setTags] = useState(['Chill', 'Lofi', 'Mashup']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter(tag => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);

  const tagPlusStyle = {
    background: token.colorBgContainer,
    borderStyle: 'none',
    color: '#727288',
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'italic',
    width: '100%',
  };

  const addData = () => {
    set(ref(database, 'contracts/' + '567898'), {
      nameContract: 'Hợp Đồng Âm Nhạc',
      recordsApprove: [
        {
          nameRecords: 'Thiên ý',
          videoURL: 'https://www.youtube.com/watch?v=WmqDcS6USiI',
        },
        {
          nameRecords: 'Thiên ý',
          videoURL: 'https://www.youtube.com/watch?v=WmqDcS6USiI',
        },
      ],
    })
      .then(() => {
        alert('Add data successfully');
      })
      .catch((err: any) => {
        alert('Error: ' + err.message);
      });
  };

  return (
    <div className="pb-[40px]">
      <MainTitleComponent
        breadcrumbs={[routerViewPlaylist, routerViewPlaylistAdd]}
        title={'Thêm Playlist'}
      />
      <button onClick={addData}>Test</button>
      <Form>
        <Row gutter={20} className="mt-[20px]">
          <Col span={5}>
            <div className="border-b-[1px] border-[#727288] pb-[25px]">
              <h3 className="text-white text-[14px] font-semibold leading-[24px] mb-[2px]">
                Ảnh bìa :
              </h3>
              <div className="button-icon-upload !w-[108px]">
                <label htmlFor="input-media">
                  <UploadIcon />
                  <h6 className="text-[14px] text-[#ffac69]">Tải lên</h6>
                </label>
                <input name="fileDoc" hidden type="file" id="input-media" />
              </div>
            </div>
            <div className="border-b-[1px] border-[#727288] pt-[12px]">
              <h3 className="text-white text-[14px] font-semibold leading-[24px] mb-[2px]">
                Tiêu đề : <span className="text-[#FF4747]">*</span>
              </h3>
              <Form.Item name={'title'}>
                <Input />
              </Form.Item>
            </div>
            <div className="border-b-[1px] border-[#727288]">
              <div className="flex justify-between items-center mt-[12px] mb-[4px]">
                <h4 className="text-white text-[14px] font-medium leading-[24px]">Tổng số :</h4>
                <span className="text-white text-[14px] font-normal leading-[24px]">0 bản ghi</span>
              </div>
              <div className="flex justify-between items-center mt-[12px] pb-[12px]">
                <h4 className="text-white text-[14px] font-medium leading-[24px]">
                  Tổng thời lượng :
                </h4>
                <span className="text-white text-[14px] font-normal leading-[24px]">--:--:--</span>
              </div>
            </div>
            <div className="border-b-[1px] border-[#727288] pt-[12px]">
              <h3 className="text-white text-[14px] font-semibold leading-[24px] mb-[2px]">
                Mô tả :
              </h3>
              <Form.Item name={'title'}>
                <TextArea />
              </Form.Item>
            </div>
            <h3 className="text-white text-[14px] font-semibold leading-[24px] mb-[2px] mt-[12px]">
              Mô tả :
            </h3>
            <div className="p-[12px] bg-[#2F2F41] mb-[12px] border-[1px] border-[#727288] rounded-[8px]">
              <>
                <div style={{ marginBottom: 16 }}>
                  <TweenOneGroup
                    enter={{
                      scale: 0.8,
                      opacity: 0,
                      type: 'from',
                      duration: 100,
                    }}
                    leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                    appear={false}
                  >
                    {tagChild}
                  </TweenOneGroup>
                </div>
                {inputVisible ? (
                  <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                ) : (
                  <Tag onClick={showInput} style={tagPlusStyle}>
                    Nhập chủ đề
                  </Tag>
                )}
              </>
            </div>
            <div className="">
              <div className="flex item-center">
                <Switch defaultChecked onChange={onChange} />
                <h3 className="text-white text-[14px] font-semibold leading-[24px] ml-[8px]">
                  Chế độ công khai
                </h3>
              </div>
            </div>
          </Col>
          <Col span={17}>
            <TableComponent
              // apiServices={recordPresenter.getRecords}
              translateFirstKey="records"
              rowKey={res => res[idChooses]}
              register={table}
              columns={columns}
              dataSource={data}
              // disableFirstCallApi={true}
            />
            <div className="mt-[40px] pb-[40px]">
              <div className="list__btn">
                <Button className="btn__cancel">Hủy</Button>
                <Button className="btn__save" htmlType="submit">
                  Lưu
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default AddPlayList;
