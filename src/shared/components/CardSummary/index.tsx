import './style.scss';

import React from 'react';

interface IProps {
  title?: string;
  icon?: any;
  count?: number;
  unit?: string;
  className?: string;
}

function CardSummary(props: IProps) {
  return (
    <div className={`card-summary ${props.className}`}>
      <div className="item__left">
        <img src={props.icon} alt="" className="card-img" />
      </div>
      <div className="item__right">
        <div className="title">{props.title}</div>
        <div className="content">
          <span className="card-number">{props.count}</span>
          <span className="card-unit">{props.unit}</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CardSummary);
