import { InputNumber } from 'antd';
import lodash from 'lodash';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { PaginationEntity } from '@core/pagination/entity';

interface IProps {
  pagination: PaginationEntity;
  onChange: (pagination: PaginationEntity) => void;
  entries?: string;
  display?: string;
}

const Pagination = (props: IProps) => {
  const { pagination, onChange } = props;
  const debounce = React.useMemo(() => {
    return lodash.debounce(value => {
      onChange({
        ...pagination,
        pageSize: value,
      });
    }, 800);
  }, [onChange, pagination]);

  if (pagination.total === 0) {
    return <></>;
  }

  const fnOnChange = (value: any) => {
    value = Math.round(value);
    if (value > 0) {
      debounce.cancel();
      debounce(value);
    }
  };
  return (
    <div className="table-function">
      <div className="pagesize">
        <span className="pagesize--show">
          <FormattedMessage id={props.display || 'common.display'} />
        </span>
        <InputNumber
          onChange={fnOnChange}
          max={250}
          min={1}
          value={pagination?.pageSize}
          defaultValue={pagination?.pageSize}
        />
        <span className="pagesize--entries">
          <FormattedMessage id={props.entries || 'common.entries'} />
        </span>
      </div>
    </div>
  );
};

export default React.memo(Pagination);
