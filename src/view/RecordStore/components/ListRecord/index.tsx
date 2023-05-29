import './styles.scss';

import React from 'react';
import { List, Card } from 'antd';
import * as Icon from 'react-feather';
import PlayIcon from '@assets/icon/play';
import ListView from '@shared/components/ListView';
import recordPresenter from '@modules/recordStore/presenter';

const ListRecord = ({ filter, search }) => {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <div className="list__record__page">
      <List
        // apiService={recordPresenter.getRecords}
        // defaultPageSize={8}
        pagination={{pageSize: 8}}
        grid={{ gutter: 30, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
              className="relative"
              cover={
                <div className="relative">
                  <img
                    className="!w-[100%]"
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                  <button className="absc">
                    <PlayIcon />
                  </button>
                </div>
              }
            >
              <>
                <h3 className="name__record">Handcrafted Fresh Bacon Multy</h3>
                <p>
                  Ca sĩ :<span>Bella Poarch</span>
                </p>
                <p>
                  Sáng tác :<span>Leilani Zulauf</span>
                </p>
                <p>
                  Số hợp đồng :<span>HD395738503</span>
                </p>
                <div className="tags__record">
                  <span>
                    <p>Thể loại</p>
                    <h6>Pop</h6>
                  </span>
                  <span>
                    <p>Định dạng</p>
                    <h6>Audio</h6>
                  </span>
                  <span>
                    <p>Thời lượng</p>
                    <h6>03:00</h6>
                  </span>
                </div>
                <button className="absolute right-[16px] bottom-[16px]">
                  <Icon.Edit size="30" stroke="#ff7506" className="icon-feather" />
                </button>
              </>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListRecord;
