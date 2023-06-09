import React from 'react';
import Icon from '@ant-design/icons';

const nextButton = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17L15 12L9 7" fill="#7E7D88" />
    <path
      d="M9 17L15 12L9 7L9 17Z"
      stroke="#7E7D88"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const NextButton = props => <Icon component={nextButton} {...props} />;
export default NextButton;
