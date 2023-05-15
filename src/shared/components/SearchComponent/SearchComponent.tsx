/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input } from 'antd';
import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { useLocation, useNavigate } from 'react-router-dom';

import { DownOutlined } from '@ant-design/icons';
import { toSearch, useQueryParams } from '@shared/hook/useQueryParams';
import { useAltaIntl } from '@shared/hook/useTranslate';

import { ISearch } from './interface';

const SearchComponent = function <T>(props: ISearch<T>) {
  const { classNames, onFinish, formItems, name } = props;
  const [form] = Form.useForm();
  const { formatMessage, intl } = useAltaIntl();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = useQueryParams();
  const [valueInput, setValueInput] = useState<string | any>();
  const [open, setOpen] = useState(false);

  const onClickKeyDown = (event: any) => {
    if (event.keyCode === 13 && props.onClick) {
      props.onClick(valueInput);
    }
  };

  const onSearch = React.useMemo(() => {
    return lodash.debounce(text => {
      if (name !== undefined) {
        const newQueryParam = lodash.set(queryParams, name, text);
        navigate(
          { pathname: location.pathname, search: toSearch(newQueryParam) },
          { replace: true },
        );
      }
      props.onSearch && props.onSearch(text);
    }, 800);
  }, [props.onSearch, name]);

  useEffect(() => {
    if (name === '' || name === undefined) {
      return;
    }
    const newValue: any = lodash.get(queryParams, props?.name, undefined);
    if (newValue) {
      setValueInput(newValue?.option?.search);
    }
  }, []);

  useEffect(() => {
    if (valueInput == null) {
      return;
    }
    onSearch(valueInput);
    return () => {
      onSearch.cancel();
    };
  }, [valueInput]);

  const onChange = (e: any) => {
    const text = e.target.value;
    setValueInput(text);
    props.onChange && props.onChange(e);
  };

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  useEffect(() => {
    const valueQuery: any = lodash.get(queryParams, name);
    form.setFieldsValue(valueQuery?.option?.filter);
  }, [form]);

  const handleSubmit = (v: any) => {
    setOpen(false);
    onFinish && onFinish(v);
  };

  return (
    <div className={`search-bar ${classNames || ''}`}>
      <Input
        type="text"
        onChange={onChange}
        onKeyDown={onClickKeyDown}
        prefix={<Icon.Search />}
        placeholder={intl.formatMessage({
          id: props.placeholder,
          defaultMessage: props.placeholder,
        })}
        value={valueInput}
      />

      {formItems && (
        <div className="drop_down">
          <a onClick={handleOpen} className="icon-down">
            <DownOutlined />
          </a>
          {open && (
            <div className="wrap_box intro-y">
              <Form form={form} onFinish={handleSubmit} layout="vertical" className="cus_form">
                <div className="content ">
                  {formItems?.map((it, idx) => (
                    <Form.Item
                      name={it.name as string}
                      label={intl.formatMessage({
                        id: it.label,
                        defaultMessage: it.label,
                      })}
                      className={it.width || ''}
                      key={idx}
                    >
                      {it.element}
                    </Form.Item>
                  ))}
                </div>
                <div className="footer_btn">
                  {/* <div className="w-25 wrap-input ">
                    <Select
                      placeholder="page size"
                      defaultValue={10}
                      onChange={handleChangePagination}
                      options={[
                        { label: 10, value: 10 },
                        { label: 30, value: 30 },
                        { label: 50, value: 50 },
                      ]}
                    />
                  </div> */}
                  <Button htmlType="submit" className="btn-search">
                    {formatMessage('common.search')}
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
