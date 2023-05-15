import './UploadMediaComponent.scss';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';

interface IProps {
  media: string;
  onChange: (media) => void;
  height?: any;
  style?: any;
}

const UploadMediaComponent = (props: IProps) => {
  return (
    <div className="upload-component w-full">
      <label htmlFor="input-media" className="w-full">
        <div className="wrap-open-modal w-full h-full">
          <div className="wrap-image text-center" style={props.style}>
            {props.media && (
              <LazyLoadImage
                src={
                  typeof props.media === 'string'
                    ? `${props.media}`
                    : URL.createObjectURL(props.media)
                }
                alt={'media'}
              />
            )}
            {props.media ? (
              ''
            ) : (
              <>
                {' '}
                <i className="fas fa-cloud-upload-alt fa-3x" />{' '}
                <div>
                  <span>
                    <FormattedMessage id="common.upload" />
                  </span>
                </div>
              </>
            )}
            <div className="open-modal">{/*<PlusOutlined />*/}</div>
          </div>
        </div>
      </label>
      <input
        onChange={e => {
          props.onChange(e.target.files![0] || undefined);
        }}
        placeholder="213123"
        type="file"
        id="input-media"
        readOnly
        name="input-media"
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  );
};

export default UploadMediaComponent;
